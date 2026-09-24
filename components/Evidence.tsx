import { Reveal } from "./Reveal";
import { EvidenceGallery, type EvidenceItem } from "./EvidenceGallery";

const items: EvidenceItem[] = [
  {
    src: "/evidence/uq-degree.webp",
    w: 496,
    h: 702,
    alt: "昆士蘭大學商學學士學位證書，主修商業資訊系統",
    code: "BNE",
    year: "2026",
    tag: "學位",
    title: "商學學士學位證書",
    org: "The University of Queensland",
    body: "商業管理學士，主修商業資訊系統。在商業與科技的交界處，找到自己的位置。",
  },
  {
    src: "/evidence/ielts.webp",
    w: 424,
    h: 591,
    alt: "IELTS 學術組測驗成績單，總分 6.5",
    code: "RMQ",
    year: "2022",
    tag: "證照",
    title: "雅思 6.5 成績單",
    org: "IELTS 學術組",
    body: "赴澳就讀前的英語門檻。清晨自學、閱讀一度卡關，調整方法後達標。",
  },
  {
    src: "/evidence/toeic.webp",
    w: 634,
    h: 902,
    alt: "TOEIC 官方成績單，總分 875",
    code: "DGM",
    year: "2025",
    tag: "證照",
    title: "TOEIC 875 金色證書",
    org: "ETS TOEIC",
    body: "返國後再次挑戰，聽力 485、閱讀 390。英語是被持續訓練的工具，不是一次性的門檻。",
  },
  {
    src: "/evidence/moe-certificate.webp",
    w: 388,
    h: 542,
    alt: "教育部青年發展署青年百億海外圓夢計畫錄取證明書",
    code: "SIN",
    year: "2025",
    tag: "計畫",
    title: "青年百億計畫錄取證明",
    org: "教育部青年發展署",
    body: "通過青年百億海外圓夢基金計畫甄選（星創解碼），帶著供應鏈的問題前往新加坡。",
  },
  {
    src: "/evidence/singapore-ace.webp",
    w: 591,
    h: 444,
    alt: "新加坡星創解碼計畫參訪合照，背景為新創展示牆",
    code: "SIN",
    year: "2025",
    tag: "計畫",
    title: "星創解碼計畫參訪",
    org: "ACE、SPACE、SWITCH 等創新場域",
    body: "走進新加坡的新創現場。智慧倉儲的即時資訊，讓我開始追問：跨組織的資訊如何互信？",
  },
  {
    src: "/evidence/yonsei-certificate.webp",
    w: 746,
    h: 537,
    alt: "延世大學 Winter Abroad 結業證書",
    code: "ICN",
    year: "2025",
    tag: "交換",
    title: "冬季交換結業證書",
    org: "Yonsei University",
    body: "Winter Abroad at Yonsei，修習媒體心理學。理解人如何信任資訊，成為研究系統信任的起點。",
  },
  {
    src: "/evidence/study-australia.webp",
    w: 749,
    h: 539,
    alt: "Study Australia 產業實習計畫結業證書",
    code: "BNE",
    year: "",
    tag: "實習",
    title: "產業實習計畫結業證書",
    org: "Study Australia × Practera",
    body: "與不同背景的學生組隊，為澳洲新創解決數位行銷問題，最終獲得客戶正向回饋。",
  },
  {
    src: "/evidence/internship-content.webp",
    w: 461,
    h: 390,
    alt: "澳洲實習專案的社群內容企劃與貼文成果",
    code: "BNE",
    year: "",
    tag: "實作",
    title: "社群內容企劃成果",
    org: "澳洲產業實習計畫",
    body: "負責市場與消費者分析、品牌價值評估與內容規劃，把分析結果變成能傳播的內容。",
  },
  {
    src: "/evidence/sql-project.png",
    w: 741,
    h: 332,
    alt: "MySQL Workbench 查詢畫面，計算產品碳排與水電用量",
    code: "BNE",
    year: "",
    tag: "實作",
    title: "永續供應鏈 SQL 專案",
    org: "昆士蘭大學課堂專案",
    body: "以 MySQL 設計查詢，從原始資料算出碳排、水電用量與訂單利潤，支持永續決策。",
  },
  {
    src: "/evidence/bpmn-process.png",
    w: 587,
    h: 288,
    alt: "BPMN 出貨流程圖，跨泳道呈現倉儲與司機的流程",
    code: "BNE",
    year: "",
    tag: "實作",
    title: "BPMN 流程建模",
    org: "昆士蘭大學課堂專案",
    body: "以 BPMN 建模訂單與出貨流程，把跨部門的隱性流程，畫成可以檢討、可以改善的圖。",
  },
  {
    src: "/evidence/uqu-volunteer.webp",
    w: 637,
    h: 892,
    alt: "昆士蘭大學學生會志工感謝狀",
    code: "BNE",
    year: "2024",
    tag: "校園",
    title: "志工感謝狀",
    org: "University of Queensland Union",
    body: "2024 年參與校內志工。真正的收穫不是時數，而是與不同文化背景的同學分工、溝通。",
  },
  {
    src: "/evidence/uq-activity.webp",
    w: 468,
    h: 312,
    alt: "昆士蘭大學校園活動合照，原住民與托雷斯海峽島民研究單位攤位前",
    code: "BNE",
    year: "",
    tag: "校園",
    title: "校園活動現場",
    org: "UQ 校園活動",
    body: "課堂之外的現場。在與不同文化交流的過程中，培養更開放的態度。",
  },
  {
    src: "/evidence/uq-graduation.webp",
    w: 351,
    h: 472,
    alt: "昆士蘭大學畢業典禮，著學士袍上台領取學位證書",
    code: "BNE",
    year: "2026",
    tag: "學位",
    title: "畢業典禮",
    org: "The University of Queensland",
    body: "從逢甲到布里斯本，雙聯學程的最後一哩。親自上台，領回這張跨越兩國的證書。",
  },
];

export function Evidence() {
  return (
    <section id="evidence" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">在場證明</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-soft md:text-lg">
            能力不該只靠自述。學位、證照、計畫與實作的原始憑證都在這裡，點開即可查核每一項經歷。
          </p>
        </Reveal>
        <EvidenceGallery items={items} />
      </div>
    </section>
  );
}
