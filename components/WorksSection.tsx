'use client';

// Секция каталога с сеткой карточек изделий 3х3.

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  { name: "Louis Vuitton Trainer", size: "Размер 43", price: "19 900 ₽", image: "/products/1.jpg" },
  { name: "Jimmy Choo High Top", size: "Размер 42, 27 см", price: "14 900 ₽", image: "/products/2.jpg" },
  { name: "Dolce&Gabbana", size: "Размер S-M", price: "8 790 ₽", image: "/products/3.jpg" },
  { name: "Adidas Jeremy Scott", size: "Размер 40", price: "7 790 ₽", image: "/products/4.jpg" },
  { name: "Dolce&Gabbana", size: "Размер M", price: "18 990 ₽", image: "/products/5.jpg" },
  { name: "Versace", size: "Размер 41, 26 см", price: "7 090 ₽", image: "/products/6.jpg" },
  { name: "Гоша Рубчинский", size: "Размер M", price: "5 890 ₽", image: "/products/7.jpg" },
  { name: "Dolce&Gabbana Cap", size: "Размер uni", price: "3 190 ₽", image: "/products/8.jpg" },
  { name: "Louis Vuitton Frontrow Red", size: "Размер 41.5, 26.5 по стельке", price: "12 990 ₽", image: "/products/9.jpg" }
];

export function WorksSection() {
  return (
    <section
      id="catalog"
      aria-labelledby="works-title"
      className="section-container py-12 sm:py-16 md:py-20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="rotate-[-1.2deg]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">catalog</p>
          <h2 id="works-title" className="section-title">
            Наша одежда на прилавке
          </h2>
          <p className="section-subtitle">Только оригинальный шмот.</p>
        </div>
        <p className="text-sm text-gray-400 rotate-[0.5deg]">*Узнавайте наличие и дропы у владельца магазина.</p>
      </div>

      <div className="mt-4 hidden items-center justify-between text-[10px] uppercase tracking-[0.26em] text-gray-500 md:flex rotate-[-0.5deg]">
        <span>grid / 3 x 3 showcase</span>
        <span>009 pieces / curated selection</span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => {
          const tiltClass = index % 2 === 0 ? "-rotate-[2deg]" : "rotate-[1.8deg]";
          return (
            <motion.article
              key={`${work.name}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.32, ease: "easeOut", delay: index * 0.03 }}
              whileHover={{ y: -6 }}
              className={`glass-card group/card dirty-vignette-sm flex flex-col overflow-visible rounded-2xl ${tiltClass}`}
            >
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-slate-900">
              <Image
                src={work.image}
                alt={work.name}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover/card:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover/card:opacity-100 pointer-events-none" aria-hidden />
              <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[10px] font-bold text-brand-gold">{index + 1}</span>
              <div className="sticker-label absolute right-4 top-4 flex h-7 w-12 rotate-3 items-center justify-center border border-white/30 bg-black/60 text-[8px] uppercase tracking-[0.2em] text-gray-200/90">drop</div>
            </div>
            <div className="relative flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">{work.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{work.size}</p>
                <p className="mt-3 text-xl font-bold text-brand-gold sm:text-2xl drop-shadow-[0_0_20px_rgba(194,161,91,0.12)]">{work.price}</p>
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold/80">Узнавайте наличие у владельца</p>
              <span className="absolute bottom-4 right-4 text-[8px] uppercase tracking-[0.2em] text-gray-600">piece</span>
            </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

