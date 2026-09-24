import { Reveal } from "./Reveal";

const groups = [
  { name: "專案管理", items: "Scrum 敏捷開發、BPMN 流程製圖（Signavio）" },
  { name: "程式與資料庫", items: "Python、MySQL" },
  { name: "分析與視覺化", items: "Power BI、Excel" },
  { name: "語言", items: "英文聽說讀寫（TOEIC 金色證書）" },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">能力</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.04}>
              <div className="border-t border-line py-6">
                <h3 className="text-base font-bold">{g.name}</h3>
                <p className="mt-2 leading-relaxed text-soft">{g.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
