# Lefevralov Store — одностраничный сайт-визитка

Одностраничный презентационный сайт для магазина одежды **«Lefevralov Store»**, созданный на **Next.js 14 (App Router)** с использованием **Tailwind CSS** и **Framer Motion**.

## Стек

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Запуск проекта

```bash
git clone <repo-url>
cd lefevralov
npm install
npm run dev
```

Откройте `http://localhost:3000` в браузере.

## Структура

- `app/layout.tsx` — базовый layout, SEO-метаданные, подключение шрифтов.
- `app/page.tsx` — главная страница с секциями.
- `components/Header.tsx` — фиксированная шапка сайта.
- `components/Hero.tsx` — первый экран с фоновым изображением и CTA.
- `components/WorksSection.tsx` — каталог с карточками одежды (3×3).
- `components/TestimonialsSection.tsx` — слайдер отзывов клиентов.
- `components/ContactSection.tsx` — контакты, соцсети и форма обратной связи.
- `components/Footer.tsx` — футер с копирайтом и ссылками.

## Настройка под себя

- Замените ссылки на Telegram / VK в `ContactSection` и `Footer` на реальные.
- Обновите изображения (Unsplash/собственные) и тексты под ваш бренд.
- При необходимости скорректируйте цветовую схему в `tailwind.config.ts` и `globals.css`.

