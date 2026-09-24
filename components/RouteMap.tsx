"use client";

import { motion, useReducedMotion } from "motion/react";

type Station = {
  code: string;
  name: string;
  org: string;
  year: string;
  x: number;
  y: number;
  lx: number;
  lyc: number;
  lyn: number;
  anchor: "start" | "end";
  now?: boolean;
};

const desktopStations: Station[] = [
  { code: "RMQ", name: "台中", org: "逢甲大學", year: "2021", x: 70, y: 130, lx: 52, lyc: 76, lyn: 102, anchor: "start" },
  { code: "BNE", name: "布里斯本", org: "昆士蘭大學", year: "2023", x: 400, y: 330, lx: 382, lyc: 380, lyn: 404, anchor: "start" },
  { code: "ICN", name: "首爾", org: "延世大學", year: "2024", x: 700, y: 95, lx: 682, lyc: 44, lyn: 68, anchor: "end" },
  { code: "SIN", name: "新加坡", org: "海外圓夢計畫", year: "", x: 950, y: 340, lx: 934, lyc: 392, lyn: 416, anchor: "end" },
  { code: "DGM", name: "東莞", org: "SKECHERS 開發中心", year: "現在", x: 1095, y: 140, lx: 1076, lyc: 92, lyn: 116, anchor: "end", now: true },
];

const desktopPath =
  "M 70 130 C 150 260, 260 350, 400 330 C 520 315, 590 170, 700 95 C 810 25, 900 240, 950 340 C 990 415, 1070 300, 1095 140";

const mobileStations: Station[] = [
  { code: "RMQ", name: "台中", org: "逢甲大學", year: "2021", x: 100, y: 60, lx: 128, lyc: 50, lyn: 74, anchor: "start" },
  { code: "BNE", name: "布里斯本", org: "昆士蘭大學", year: "2023", x: 580, y: 170, lx: 552, lyc: 162, lyn: 186, anchor: "end" },
  { code: "ICN", name: "首爾", org: "延世大學", year: "2024", x: 120, y: 300, lx: 100, lyc: 330, lyn: 354, anchor: "start" },
  { code: "SIN", name: "新加坡", org: "海外圓夢計畫", year: "", x: 580, y: 430, lx: 552, lyc: 422, lyn: 446, anchor: "end" },
  { code: "DGM", name: "東莞", org: "SKECHERS 開發中心", year: "現在", x: 140, y: 560, lx: 110, lyc: 598, lyn: 622, anchor: "start", now: true },
];

const mobilePath =
  "M 100 60 C 260 40, 480 80, 580 170 C 660 245, 240 230, 120 300 C 10 365, 470 350, 580 430 C 665 495, 230 490, 140 560";

function RouteMapSvg({
  stations,
  path,
  viewBox,
  labelCodeSize,
  labelNameSize,
  reduced,
}: {
  stations: Station[];
  path: string;
  viewBox: string;
  labelCodeSize: number;
  labelNameSize: number;
  reduced: boolean;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label="楊曉熙的足跡路線圖：台中、布里斯本、首爾、新加坡，現在於東莞"
      className="h-auto w-full"
    >
      <title>楊曉熙的足跡路線圖：台中、布里斯本、首爾、新加坡，現在於東莞</title>
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      {stations.map((s, i) => (
        <g key={s.code}>
          {s.now && (
            <motion.circle
              cx={s.x}
              cy={s.y}
              r={11}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={1.5}
              initial={reduced ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          )}
          <motion.circle
            cx={s.x}
            cy={s.y}
            r={s.now ? 5.5 : 5}
            fill="var(--accent)"
            initial={reduced ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.5 + i * 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <motion.text
            x={s.lx}
            y={s.lyc}
            textAnchor={s.anchor}
            fontSize={labelCodeSize}
            fontWeight={600}
            letterSpacing="0.08em"
            fill="currentColor"
            stroke="var(--paper)"
            strokeWidth={labelCodeSize * 0.22}
            strokeLinejoin="round"
            paintOrder="stroke"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 + i * 0.28 }}
          >
            {s.code}
            {s.year && (
              <tspan
                dx={labelCodeSize * 0.4}
                fontSize={labelCodeSize * 0.75}
                fontWeight={400}
                fill="var(--soft)"
              >
                {s.year}
              </tspan>
            )}
          </motion.text>
          <motion.text
            x={s.lx}
            y={s.lyn}
            textAnchor={s.anchor}
            fontSize={labelNameSize}
            fill="var(--soft)"
            stroke="var(--paper)"
            strokeWidth={labelNameSize * 0.24}
            strokeLinejoin="round"
            paintOrder="stroke"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.28 }}
          >
            {`${s.name} · ${s.org}`}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}

export function RouteMap() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden={false} className="text-ink">
      <div className="hidden md:block">
        <RouteMapSvg
          stations={desktopStations}
          path={desktopPath}
          viewBox="0 0 1160 430"
          labelCodeSize={21}
          labelNameSize={17}
          reduced={!!reduced}
        />
      </div>
      <div className="md:hidden">
        <RouteMapSvg
          stations={mobileStations}
          path={mobilePath}
          viewBox="0 0 700 660"
          labelCodeSize={24}
          labelNameSize={20}
          reduced={!!reduced}
        />
      </div>
    </div>
  );
}
