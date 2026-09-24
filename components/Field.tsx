import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const rows = [
  {
    role: "報價樞紐",
    title: "成本與報價專案管理",
    body: "執行 SKECHERS 開發專案的成本與報價分析，作為跨部門與供應商之間的溝通樞紐，確保各節點資訊同步。",
  },
  {
    role: "流程診斷",
    title: "盤點系統，找出根因",
    body: "分析現有資料系統與工作流程，找到高度仰賴人工處理、資訊不一致與效率低落的根本原因。",
  },
  {
    role: "改善構想",
    title: "資料整合與自動化",
    body: "針對流程痛點提出資料整合與自動化方案，減少跨部門溝通的隱性成本，為數位轉型奠定基礎。",
  },
];

const chain = ["設計", "開發", "採購", "生產", "物流", "品牌端"];

export function Field() {
  return (
    <section id="field" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            現場：東莞 · SKECHERS 開發中心
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-soft md:text-lg">
            在全球最大主力代工廠擔任報價專員（2025 至今），我看見數位轉型最真實的樣貌：瓶頸往往不是技術不夠，而是流程與資料沒有接起來。
          </p>
        </Reveal>
        <div className="mt-14">
          {rows.map((row, i) => (
            <Reveal key={row.role} delay={i * 0.05}>
              <div className="grid gap-2 border-t border-line py-8 pl-10 md:grid-cols-[190px_1fr] md:gap-10 md:pl-0">
                <p className="font-mono text-sm leading-7 text-accent-deep">{row.role}</p>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{row.title}</h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-soft">{row.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-xl bg-ink p-6 text-paper md:p-8">
            <p className="font-mono text-sm text-paper/60">一隻鞋的完整生命週期</p>
            <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 text-[15px] font-medium md:text-base">
              {chain.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className={i === chain.length - 1 ? "text-accent" : undefined}>{step}</span>
                  {i < chain.length - 1 && (
                    <span aria-hidden="true" className="text-paper/40">
                      <ArrowRight className="h-4 w-4" weight="bold" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
