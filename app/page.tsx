import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Journey } from "@/components/Journey";
import { Field } from "@/components/Field";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Evidence } from "@/components/Evidence";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        跳到主要內容
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Research />
        <Journey />
        <Field />
        <Projects />
        <Skills />
        <Evidence />
      </main>
      <Contact />
    </>
  );
}
