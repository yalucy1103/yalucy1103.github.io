import { GithubLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">聯絡</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[55ch] leading-relaxed text-soft">
            正在準備 2026 研究所申請，歡迎交流供應鏈、資訊系統與資料分析。
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <a
            href="mailto:yalucy1103@gmail.com"
            className="mt-10 inline-block break-all font-display text-2xl font-bold tracking-tight underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent-deep sm:text-3xl md:text-5xl"
          >
            yalucy1103@gmail.com
          </a>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href="https://github.com/yalucy1103"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-lg font-medium underline-offset-8 hover:underline"
          >
            <GithubLogo className="h-5 w-5" weight="fill" />
            github.com/yalucy1103
          </a>
        </Reveal>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-soft">
          <p>© 2026 楊曉熙</p>
          <p className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            高雄，台灣
          </p>
        </div>
      </div>
    </footer>
  );
}
