'use client';

// Секция каталога с сеткой карточек изделий 3х3.
// Вместо реальных фото используем аккуратные графические заглушки.

import { motion } from "framer-motion";

const works = [
  {
    name: "Классический пиджак",
    description: "Элегантный пиджак из итальянской шерсти"
  },
  {
    name: "Платье-футляр",
    description: "Вечернее платье ручной работы"
  },
  {
    name: "Брюки-чинос",
    description: "Удобные брюки для повседневной носки"
  },
  {
    name: "Рубашка оверсайз",
    description: "Стильная рубашка из хлопка премиум-класса"
  },
  {
    name: "Пальто тренч",
    description: "Классическое пальто на все сезоны"
  },
  {
    name: "Джинсы скинни",
    description: "Идеально сидящие джинсы из японского денима"
  },
  {
    name: "Свитер кашемир",
    description: "Мягкий свитер из 100% кашемира"
  },
  {
    name: "Юбка-карандаш",
    description: "Офисная юбка из стрейч-твила"
  },
  {
    name: "Костюм тройка",
    description: "Деловой костюм для важных встреч"
  }
];

export function WorksSection() {
  return (
    <section
      id="catalog"
      aria-labelledby="works-title"
      className="section-container py-20 sm:py-24 md:py-32"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="works-title" className="section-title">
            Лучшие примеры нашей одежды
          </h2>
          <p className="section-subtitle">Только оригинальный шмот.</p>
        </div>
        <p className="text-sm text-gray-400">
          *Узнавайте наличие и дропы у владельца магазина.
        </p>
      </div>

      {/* Техничный подпояс к сетке, ломает идеальную «правильность» в духе лукбуков */}
      <div className="mt-4 hidden items-center justify-between text-[10px] uppercase tracking-[0.26em] text-gray-500 md:flex">
        <span>grid / 3 x 3 showcase</span>
        <span>009 pieces / curated selection</span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06
            }
          }
        }}
        className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {works.map((work, index) => {
          const tiltClass = index % 2 === 0 ? "-rotate-[1deg]" : "rotate-[1deg]";
          return (
            <motion.article
              key={work.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className={`glass-card flex flex-col overflow-visible rounded-2xl ${tiltClass}`}
            >
            {/* Грязная графическая заглушка вместо фото изделия */}
            <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_60%)] bg-slate-900">
              <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="h-24 w-16 -rotate-3 rounded-md border border-dashed border-brand-gold/60 bg-slate-900/70 shadow-inner shadow-black/60" />
              <div className="sticker-label absolute right-6 top-6 flex h-8 w-14 rotate-3 items-center justify-center border border-white/30 bg-black/60 text-[8px] uppercase tracking-[0.26em] text-gray-200/90">
                drop
              </div>
              <span className="pointer-events-none absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.32em] text-gray-500/80">
                sample / used
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  {work.name}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {work.description}
                </p>
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
                Узнавайте наличие у владельца
              </p>
            </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

