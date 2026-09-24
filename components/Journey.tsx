import { Reveal } from "./Reveal";

const stations = [
  {
    year: "2021",
    code: "RMQ",
    title: "台中 · 逢甲大學",
    body: "國際科技與管理學院全英文學程。GPA 4.0/4.3，獲教育部學海飛揚獎學金，第一次把「國際」變成日常。",
  },
  {
    year: "2023",
    code: "BNE",
    title: "布里斯本 · 昆士蘭大學",
    body: "商業資訊系統學士。在商業與科技的交界處找到自己的位置：讓系統服務於人與流程。",
  },
  {
    year: "2024",
    code: "ICN",
    title: "首爾 · 延世大學交換",
    body: "主修媒體心理學。理解人如何信任介面與資訊，成為日後研究「系統信任」的起點。",
  },
  {
    year: "入選",
    code: "SIN",
    title: "新加坡 · 海外圓夢計畫",
    body: "獲教育部青年發展署青年百億海外圓夢基金計畫入選，帶著供應鏈的問題，看見跨境協作的真實難題。",
  },
  {
    year: "2025",
    code: "DGM",
    title: "東莞 · SKECHERS 開發中心",
    body: "大力卜集團旗下，全球最大主力代工廠。從學術回到現場，擔任報價專員。",
  },
];

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            從高雄出發，回到供應鏈現場
          </h2>
        </Reveal>
        {/* TODO(頭像槽位): 使用者將提供動漫形式個人照片，預計放置於本區末尾（建議 4:5，圓角 12px），屆時於此處加入 */}
        <ol className="relative mt-16">
          <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
          {stations.map((s, i) => (
            <Reveal key={s.code} delay={i * 0.05}>
              <li className="relative grid gap-2 py-7 pl-10 md:grid-cols-[130px_1fr] md:gap-10 md:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[38px] h-[15px] w-[15px] rounded-full border-2 border-paper bg-accent"
                />
                <p className="tnum font-mono text-sm leading-6 text-soft">
                  <span className="text-ink">{s.year}</span>
                  <span className="ml-3 tracking-widest">{s.code}</span>
                </p>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-soft">{s.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
