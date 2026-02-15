'use client';

// Контактный блок с акцентом на социальные сети и переход в онлайн-магазин.

import { motion } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="section-container py-10 sm:py-16 md:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">
        <div className="space-y-2 -rotate-[0.8deg]">
          <h2 id="contacts-title" className="section-title">
            Связаться с нами
          </h2>
          <p className="section-subtitle">
            Мы всегда на связи в удобных для вас мессенджерах.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-white">Социальные сети</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="https://t.me/Lefevralov"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 text-sm text-gray-100 shadow-sm shadow-black/30 transition-colors hover:border-brand-gold hover:text-brand-gold"
                  aria-label="Открыть Telegram Lefevralov Store"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/80 text-xs font-bold text-white">
                    TG
                  </span>
                  <span>Telegram</span>
                </Link>
                <Link
                  href="https://vk.ru/13yolovesfortnite"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 text-sm text-gray-100 shadow-sm shadow-black/30 transition-colors hover:border-brand-gold hover:text-brand-gold"
                  aria-label="Открыть ВКонтакте Lefevralov Store"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-700/80 text-xs font-bold text-white">
                    VK
                  </span>
                  <span>ВКонтакте</span>
                </Link>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-white">Email: </span>
                <a
                  href="mailto:hello@lefevralov.store"
                  className="hover:text-brand-gold"
                >
                  hello@lefevralov.store
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Адрес: </span>
                Москва, дизайн-квартал (по предварительной записи)
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-7 rotate-[1.2deg]">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold/80">
              Онлайн-магазин
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
              Перейти в Telegram
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Актуальные модели, коллекции капсул и закрытые предложения —
              доступны в нашем Telegram-магазине.
            </p>
            <Link
              href="https://t.me/Lefevralov"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-slate-950 shadow-md shadow-brand-gold/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Открыть магазин в Telegram
            </Link>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-7 -rotate-[1deg]">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold/80">
              Каталог ВКонтакте
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
              Смотрите образы во VK
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Подборки образов, фото клиентов и вдохновение на каждый день —
              всё в нашем сообществе.
            </p>
            <Link
              href="https://vk.ru/13yolovesfortnite"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-brand-gold/60 px-5 py-2 text-sm font-medium text-brand-gold transition-colors duration-300 hover:bg-brand-gold hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Перейти во ВКонтакте
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
