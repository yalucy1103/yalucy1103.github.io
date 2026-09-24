"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

export type EvidenceItem = {
  src: string;
  w: number;
  h: number;
  alt: string;
  code: string;
  year: string;
  tag: string;
  title: string;
  org: string;
  body: string;
};

function metaLine(item: EvidenceItem) {
  return item.year ? `${item.year} ${item.code}` : item.code;
}

export function EvidenceGallery({ items }: { items: EvidenceItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const item = open === null ? null : items[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowLeft")
        setOpen((o) => (o === null ? o : (o - 1 + items.length) % items.length));
      else if (e.key === "ArrowRight")
        setOpen((o) => (o === null ? o : (o + 1) % items.length));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, items.length]);

  return (
    <>
      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((it, i) => (
          <Reveal key={it.src} delay={(i % 3) * 0.05} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-haspopup="dialog"
              className="group block w-full cursor-zoom-in text-left"
            >
              <span className="block overflow-hidden rounded-lg border border-line bg-white">
                <img
                  src={it.src}
                  width={it.w}
                  height={it.h}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-3">
                <span className="tnum font-mono text-xs tracking-widest text-soft">
                  {metaLine(it)}
                </span>
                <span className="font-mono text-xs text-accent-deep">{it.tag}</span>
              </span>
              <span className="mt-1 block font-bold tracking-tight">{it.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-soft">{it.body}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {item && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm"
            style={{ backgroundColor: "rgba(20, 20, 19, 0.9)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(null);
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${item.title} 憑證檢視`}
              tabIndex={-1}
              className="mx-auto flex min-h-full w-full max-w-4xl flex-col items-center justify-center px-4 py-20 outline-none md:px-12"
            >
              <motion.figure
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="flex justify-center">
                  <img
                    src={item.src}
                    width={item.w}
                    height={item.h}
                    alt={item.alt}
                    className="max-h-[70vh] w-auto max-w-full rounded-lg bg-white shadow-2xl"
                  />
                </div>
                <figcaption className="mx-auto mt-6 max-w-[62ch] text-center">
                  <p className="tnum font-mono text-xs tracking-widest text-[#edede7]/60">
                    {metaLine(item)}
                    <span className="ml-4">{item.tag}</span>
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#edede7]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#edede7]/70">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#edede7]/80">{item.body}</p>
                </figcaption>
              </motion.figure>
            </div>

            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="關閉檢視"
              className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#edede7]/20 bg-[#edede7]/10 text-[#edede7] transition-colors hover:bg-[#edede7]/20"
            >
              <X className="h-5 w-5" weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => ((o ?? 0) - 1 + items.length) % items.length)}
              aria-label="上一張"
              className="fixed left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#edede7]/20 bg-[#edede7]/10 text-[#edede7] transition-colors hover:bg-[#edede7]/20"
            >
              <CaretLeft className="h-5 w-5" weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => ((o ?? 0) + 1) % items.length)}
              aria-label="下一張"
              className="fixed right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#edede7]/20 bg-[#edede7]/10 text-[#edede7] transition-colors hover:bg-[#edede7]/20"
            >
              <CaretRight className="h-5 w-5" weight="bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
