import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            兩個把資料變成決策的專案
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="mt-16 grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">澳洲房地產價格落差預測</h3>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-soft">
                整合結構化與非結構化資料，建立二元分類模型，預測實際成交價與掛牌價的落差；並以情感與語意分析解讀房產描述文字背後的市場訊號。
              </p>
            </div>
            <div className="md:col-span-4 md:border-l md:border-line md:pl-10">
              <p className="font-mono text-sm leading-7 text-soft">
                Python、Pandas
                <br />
                Scikit-learn
                <br />
                VADER、LDA、Doc2Vec
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4 md:order-1 order-2 md:border-l md:border-line md:pl-10">
              <p className="font-display text-6xl font-bold tracking-tight text-accent md:text-7xl">
                <span className="tnum">-15%</span>
              </p>
              <p className="mt-2 text-sm text-soft">運輸成本降低</p>
            </div>
            <div className="order-1 md:order-2 md:col-span-8">
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">永續供應鏈管理系統</h3>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-soft">
                建立 ERD 與 MySQL 報表，追蹤生產碳排放與能源使用；分析運輸距離與排放數據，計算出最佳運輸路線，並以自訂 SQL 報告提供即時業務洞察。
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
