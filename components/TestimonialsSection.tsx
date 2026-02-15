'use client';

// Секция слайдера с отзывами клиентов и рейтингом.
// Фото клиентов заменены на стилизованную круглую заглушку.

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  city: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Анна",
    city: "Москва",
    text: "Потрясающее качество! Шила платье на свадьбу сестры, все гости в восторге!",
    rating: 5
  },
  {
    id: 2,
    name: "Дмитрий",
    city: "Санкт-Петербург",
    text: "Лучшие брюки в моей жизни. Сидят идеально, и ткань ощущается премиально.",
    rating: 5
  },
  {
    id: 3,
    name: "Екатерина",
    city: "Екатеринбург",
    text: "Обслуживание на высшем уровне. Помогли с выбором фасона и ткани, очень довольна.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  function handleChange(newIndex: number) {
    setIndex((prev) => {
      if (newIndex === prev) return prev;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  }

  return (
    <section
      id="reviews"
      aria-labelledby="testimonials-title"
      className="section-container py-16 sm:py-24 md:py-28"
    >
      <div className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="-rotate-[1.5deg]">
            <h2 id="testimonials-title" className="section-title">
              Что говорят о нас
            </h2>
            <p className="section-subtitle">
              Мы ценим личное общение и доверие клиентов, поэтому уделяем много
              внимания сервису и деталям.
            </p>
          </div>

          {/* Круг справа, между заголовком и блоком отзыва */}
          <div className="relative mx-auto mt-8 flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56 md:absolute md:right-0 md:-top-28 md:mt-0 md:h-64 md:w-64">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              {/* Внешний круг */}
              <div className="absolute inset-0 rounded-full border border-brand-gold/60 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.95),_rgba(15,23,42,1))] shadow-[0_0_60px_rgba(0,0,0,0.7)]" />

              {/* Внутренний круг с названием бренда */}
              <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full border border-brand-gold/80 bg-[radial-gradient(circle,_rgba(148,163,184,0.25),_transparent_60%)] bg-slate-900 text-[10px] font-semibold tracking-[0.3em] text-brand-gold">
                <span className="uppercase">Lefevralov</span>
                <span className="mt-0.5 uppercase">Store</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10">
          <motion.div
            className="glass-card relative overflow-hidden rounded-3xl border-t border-white/20 p-7 sm:p-9"
            initial={{ rotate: -1.5 }}
            animate={{ rotate: -1.5 }}
            whileHover={{ y: -4, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-gold/80">
                  Отзыв
                </p>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                  "{current.text}"
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-base font-semibold text-white">
                      {current.name}
                    </p>
                    <p className="text-sm text-gray-400">{current.city}</p>
                  </div>
                  <div
                    aria-label={`Рейтинг ${current.rating} из 5`}
                    className="ml-auto flex items-center gap-1 text-brand-gold"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        aria-hidden="true"
                        className={i < current.rating ? "opacity-100" : "opacity-30"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2" aria-label="Навигация по отзывам">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleChange(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index
                        ? "w-7 bg-brand-gold"
                        : "w-2.5 bg-white/20 hover:bg-white/35"
                    }`}
                    aria-label={`Показать отзыв ${i + 1}`}
                    aria-pressed={i === index}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleChange(index - 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-900/60 text-sm text-gray-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  aria-label="Предыдущий отзыв"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => handleChange(index + 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-900/60 text-sm text-gray-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  aria-label="Следующий отзыв"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

