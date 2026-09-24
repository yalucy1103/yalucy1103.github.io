import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

const links = [
  { href: "#research", label: "研究" },
  { href: "#journey", label: "旅程" },
  { href: "#field", label: "現場" },
  { href: "#projects", label: "專案" },
  { href: "#skills", label: "能力" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-sm">
      <nav
        aria-label="主導覽"
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-lg font-bold tracking-tight">楊曉熙</span>
          <span className="hidden font-mono text-xs font-medium tracking-widest text-soft sm:inline">
            LUCY YANG
          </span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] text-soft underline-offset-8 transition-colors hover:text-ink hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/yalucy1103"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub：yalucy1103"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-accent-deep"
          >
            <GithubLogo className="h-5 w-5" weight="fill" />
          </a>
        </div>
      </nav>
    </header>
  );
}
