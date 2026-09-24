import { Reveal } from "./Reveal";
import { ModelFlow } from "./ModelFlow";

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            區塊鏈能讓供應鏈更透明嗎？
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-soft md:text-lg">
            跨組織資訊系統的難題不在技術，在信任。我的研究以「區塊鏈、信任、資訊共享、透明度、績效」為核心概念模型，結合問卷實證與模擬方法，檢驗不同程度的區塊鏈導入，如何改變供應鏈成員的資訊共享行為與營運績效。
          </p>
        </Reveal>
        <Reveal delay={0.16} className="mt-12">
          <ModelFlow />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-12 font-mono text-sm text-soft">
            混合研究方法：問卷實證、案例研究、Python 代理人基模擬
          </p>
        </Reveal>
      </div>
    </section>
  );
}
