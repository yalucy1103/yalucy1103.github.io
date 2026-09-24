// Zero-dep CDP screenshotter.
// Layout viewport stays at normal size; we scroll through the page to fire all
// once:true whileInView reveals, return to top, then capture full-page via
// captureBeyondViewport. Resizing the viewport to full height is NOT viable:
// hero uses min-h-[100dvh] and would grow with the viewport.
const fs = require("fs");
const http = require("http");
const { execFile } = require("child_process");

const OUT_URL = "http://127.0.0.1:4173/";
const REVIEW = "C:/Users/Zonlic/Desktop/Lucy/.impeccable/review";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9333;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function jsonGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let b = "";
      res.on("data", (c) => (b += c));
      res.on("end", () => resolve(JSON.parse(b)));
    }).on("error", reject);
  });
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async evaluate(expression) {
    const { result, exceptionDetails } = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (exceptionDetails) throw new Error(exceptionDetails.text);
    return result.value;
  }
}

async function shoot(cdp, { name, width, height, mobile, scheme }) {
  await cdp.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: scheme }],
  });
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
  });
  await cdp.send("Page.navigate", { url: OUT_URL });
  // wait for the real page (about:blank / chrome-error report tiny heights)
  let bodyH = 0;
  for (let i = 0; i < 40; i++) {
    await sleep(500);
    bodyH = await cdp.evaluate(
      `location.href === '${OUT_URL}' ? document.body.scrollHeight : 0`
    ).catch(() => 0);
    if (bodyH > 1500) break;
  }
  if (bodyH <= 1500) throw new Error("page never reported full height");
  await sleep(1200); // hydration + route-map draw underway

  // scroll through the page in small steps so every whileInView (amount .25, once) fires
  const vh = height;
  for (let y = 0; y < bodyH; y += Math.round(vh * 0.6)) {
    await cdp.evaluate(`window.scrollTo(0, ${y})`);
    await sleep(260);
  }
  await cdp.evaluate("window.scrollTo(0, document.body.scrollHeight)");
  await sleep(800);
  await cdp.evaluate("window.scrollTo(0, 0)");
  await sleep(1600); // last reveals (0.7s + stagger) settle

  const shot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
  });
  const file = `${REVIEW}/${name}.png`;
  fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
  const buf = fs.readFileSync(file);
  console.log(`${name}: ${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)} (layout bodyH ${bodyH}) -> ${file}`);
}

(async () => {
  const userDataDir = process.env.TEMP + "\\chrome-shot-profile";
  const chrome = execFile(CHROME, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${userDataDir}`,
    "--no-first-run",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,900",
    "about:blank",
  ]);
  await sleep(1500);
  try {
    const cdp = await connect();
    await shoot(cdp, { name: "desktop", width: 1440, height: 900, mobile: false, scheme: "light" });
    await shoot(cdp, { name: "mobile", width: 390, height: 844, mobile: true, scheme: "light" });
    await shoot(cdp, { name: "dark-desktop", width: 1440, height: 900, mobile: false, scheme: "dark" });
    console.log("DONE");
  } finally {
    chrome.kill();
  }
  process.exit(0);
})().catch((e) => {
  console.error("FAIL", e);
  process.exit(1);
});

async function connect() {
  const targets = await jsonGet(`http://127.0.0.1:${PORT}/json`);
  const page = targets.find((t) => t.type === "page");
  if (!page) throw new Error("no page target");
  const { WebSocket } = globalThis;
  const ws = new WebSocket(page.webSocketDebuggerUrl, { maxPayload: 256 * 1024 * 1024 });
  await new Promise((res, rej) => {
    ws.addEventListener("open", res);
    ws.addEventListener("error", rej);
  });
  return new CDP(ws);
}
