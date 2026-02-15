'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AVITO_URL = "https://www.avito.ru/brands/69381f4696f3ca87416661ba64868cde/all?sellerId=c41d6b4917b714048cda93ab33e7884b";

export function ContactSection() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="section-container py-10 sm:py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">
        <div className="relative space-y-2 -rotate-[1.8deg]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Связь</p>
          <p className="absolute top-0 right-0 text-[9px] uppercase tracking-[0.32em] text-gray-600">dm us</p>
          <h2 id="contacts-title" className="section-title">Связаться с нами</h2>
          <p className="section-subtitle">Мы всегда на связи в удобных для вас мессенджерах.</p>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-white">Социальные сети</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="https://t.me/Lefevralov" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 text-sm text-gray-100 shadow-sm transition-colors hover:border-brand-gold hover:text-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" aria-label="Открыть Telegram Lefevralov Store">
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sky-500/80">
                    <Image src="/telegram.png" alt="" width={28} height={28} className="object-contain" />
                  </span>
                  <span>Telegram</span>
                </Link>
                <Link href={AVITO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 text-sm text-gray-100 shadow-sm transition-colors hover:border-brand-gold hover:text-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" aria-label="Открыть магазин на Авито">
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                    <Image src="/avito-logo.png" alt="" width={28} height={28} className="object-contain" />
                  </span>
                  <span>Авито</span>
                </Link>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Email: </span>
              <a href="mailto:Mainsory@mail.ru" className="hover:text-brand-gold">Mainsory@mail.ru</a>
            </p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, ease: "easeOut" }} className="space-y-5">
          <div className="glass-card glow-on-hover dirty-vignette-sm rounded-3xl p-6 sm:p-7 rotate-[2deg] transition-transform duration-200 hover:-translate-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Онлайн-магазин</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-white">Перейти в Telegram</h3>
            <p className="mt-2 text-sm text-gray-300">Актуальные модели, коллекции капсул и закрытые предложения — доступны в нашем Telegram-магазине.</p>
            <Link href="https://t.me/Lefevralov" target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-slate-950 shadow-md shadow-gold-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Открыть магазин в Telegram</Link>
          </div>
          <div className="glass-card glow-on-hover dirty-vignette-sm rounded-3xl p-6 sm:p-7 -rotate-[1.8deg] transition-transform duration-200 hover:-translate-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Магазин на Авито</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-white">Каталог и объявления на Авито</h3>
            <p className="mt-2 text-sm text-gray-300">Актуальные объявления, отзывы покупателей и безопасные сделки — всё на нашей странице продавца.</p>
            <Link href={AVITO_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-gold/60 px-5 py-2 text-sm font-medium text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-slate-950 hover:shadow-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Перейти на Авито</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
