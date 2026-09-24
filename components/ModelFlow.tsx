"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const steps = ["區塊鏈導入", "系統信任", "資訊共享", "資訊透明度", "營運績效"];

export function ModelFlow() {
  const reduce = useReducedMotion();
  return (
    <div>
      <ul className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-1.5">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col items-center gap-2 sm:flex-row sm:gap-1.5">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block rounded-lg border px-4 py-2.5 text-center text-sm font-medium md:px-5 md:text-[15px] ${
                i === steps.length - 1
                  ? "border-accent bg-accent/10 text-accent-deep"
                  : "border-line text-ink"
              }`}
            >
              {step}
            </motion.span>
            {i < steps.length - 1 && (
              <motion.span
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
                className="text-accent"
                aria-hidden="true"
              >
                <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" weight="bold" />
              </motion.span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
