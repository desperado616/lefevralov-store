'use client';

// Герой-секция с крупным заголовком, подзаголовком и CTA-кнопкой.

import { motion } from "framer-motion";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

// У Bebas Neue доступен только вес 400, используем его и усиливаем визуально через размер/треккинг.
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400"
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050509] via-[#101118] to-black"
      aria-labelledby="hero-title"
    >
      {/* Слегка «грязное» световое пятно для глубины без фотографий */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(194,161,91,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rotate-[-8deg] bg-[radial-gradient(circle,_rgba(148,163,184,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rotate-6 bg-[radial-gradient(circle,_rgba(15,23,42,0.9),_transparent_65%)]" />
      {/* Дополнительный слой шумных диагональных линий только для hero */}
      <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light bg-[repeating-linear-gradient(115deg,rgba(148,163,184,0.18)_0,rgba(148,163,184,0.18)_1px,transparent_1px,transparent_3px)]" />

      {/* Мелкие техно-лейблы по краям, как в лукбуках high-fashion брендов */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="pointer-events-none absolute left-6 top-32 hidden flex-col text-[10px] uppercase tracking-[0.28em] text-gray-500 md:flex"
      >
        <span>LFS / DROP 001</span>
        <span className="mt-1 text-gray-600">street tailoring archive</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="pointer-events-none absolute bottom-20 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-gray-500 md:block"
      >
        SIZE CURVE / OVERSIZED FIT
      </motion.div>

      <div className="relative section-container flex min-h-screen flex-col items-center justify-center pt-4 sm:pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6 text-center"
        >
          <h1
            id="hero-title"
            className={`${bebas.className} glitch-hover text-6xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] text-white`}
          >
            <span className="inline-block -skew-x-2" style={{ letterSpacing: "-0.04em" }}>
              Lefevralov
            </span>{" "}
            <span className="inline-block" style={{ letterSpacing: "0.06em" }}>
              Store
            </span>
          </h1>
          <p className="font-mono text-xs sm:text-sm text-brand-light/80" />

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#catalog"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#ff6b35] px-8 py-3 text-sm sm:text-base font-semibold text-slate-950 shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span className="transition-opacity duration-150 group-hover:opacity-0">
                DROP IT
              </span>
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 text-xs sm:text-sm uppercase tracking-[0.22em] text-slate-950 transition-opacity duration-150 group-hover:opacity-100">
                IT&apos;S LIT.
              </span>
            </Link>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-400">
              limited drops / made to order
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


