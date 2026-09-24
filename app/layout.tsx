import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "楊曉熙 Lucy Yang · 供應鏈 × 資料 × 系統",
  description:
    "把混亂的商業流程整理成可運行的系統。楊曉熙，商業資訊系統背景，現任 SKECHERS 開發中心報價專員，研究區塊鏈與智慧供應鏈信任。",
  openGraph: {
    title: "楊曉熙 Lucy Yang · 供應鏈 × 資料 × 系統",
    description:
      "把混亂的商業流程整理成可運行的系統。研究：區塊鏈與智慧供應鏈的信任與透明度。",
    locale: "zh_Hant",
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#161615" },
  ],
};

const directionContract = `DIRECTION CONTRACT (user-pinned 2026-09-24, seed: route-map-editorial)
THESIS: 這個網站把一份履歷畫成一張供應鏈路線圖：人生軌跡即物流路線，節點即經歷；拒絕「頭像+技能條+三欄卡片」的模板履歷排版。
OWN-WORLD: 冷調紙白底、近黑墨色、單一國際橘強調（貨運信號色）；Noto Sans TC 正文、Archivo 拉丁展示、JetBrains Mono 機場代碼與年份；髮線分隔的非對稱編輯排版，無眉標、無編號、無裝飾底紋。
STORY: 教授在數分鐘內理解申請者是誰（把混亂流程整理成可運行系統的人）、研究什麼（區塊鏈 x 供應鏈信任）、憑什麼（現場經歷與真實數據），並記住那張從高雄出發繞行四國回到東莞現場的路線圖。
FIRST VIEWPORT: 64px 導覽下方，左側兩行大標與一句副標、兩個入口（研究計畫/GitHub），下方全寬路線圖 SVG（RMQ-BNE-ICN-SIN-DGM，描線入場），橘色節點標註城市與年份。
FORM: 使用者從四個方向卡中選定「路線圖敘事 x 編輯式排版」；brief-pinned，未經 concept-seed 競猜。
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${noto.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <div hidden dangerouslySetInnerHTML={{ __html: `<!-- ${directionContract.replace(/\n/g, " | ")} -->` }} />
        {children}
      </body>
    </html>
  );
}
