import { GithubLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { RouteMap } from "./RouteMap";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col justify-center pb-8 pt-24 md:pt-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <h1 className="max-w-3xl text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          把混亂的商業流程，
          <br />
          整理成<span className="text-accent">可運行的系統</span>。
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
          楊曉熙 Lucy Yang。供應鏈現場 × 資料分析 × 資訊系統，正在研究區塊鏈與供應鏈信任。
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#research"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-paper transition-transform hover:-translate-y-px"
          >
            研究計畫
            <ArrowRight className="h-4 w-4" weight="bold" />
          </a>
          <a
            href="https://github.com/yalucy1103"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            <GithubLogo className="h-4 w-4" weight="fill" />
            GitHub
          </a>
        </div>
        <div className="mt-12 md:mt-10">
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
