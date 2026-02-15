'use client';

// Фиксированная шапка сайта с логотипом и навигацией по секциям.

import Link from "next/link";
import { motion } from "framer-motion";

// Немного «сломанный» порядок пунктов для подросткового вайба.
const navItems = [
  { href: "#contacts", label: "Контакты" },
  { href: "#catalog", label: "Каталог" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#hero", label: "Главная" }
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
      style={{ position: 'fixed' }}
    >
      <div className="section-container flex items-center justify-between py-3 sm:py-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-brand-gold"
          aria-label="Lefevralov Store — на главную"
        >
          <span className="font-serif text-lg md:text-xl">
            Lefevralov Store
          </span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden sm:block">
          <ul className="flex items-center gap-4 sm:gap-8 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#00ff9d]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <span className="relative">
                    {item.label}
                    <span className="pointer-events-none absolute -right-2 -top-2 text-[8px] text-[#00ff9d]/40 group-hover:text-[#00ff9d]/80">
                      *
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}


