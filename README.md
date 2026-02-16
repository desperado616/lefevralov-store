# Lefevralov Store — одностраничный премиальный лендинг

Одностраничный презентационный сайт для магазина одежды **«Lefevralov Store»**, созданный на **Next.js 14 (App Router)** с использованием **TypeScript**, **Tailwind CSS** и **Framer Motion**.  
Дизайн стилизован под люкс‑streetwear: «грязный» фон, мягкая типографика, премиальные карточки и аккуратные анимации.

## Стек

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next/font** для подключения Rubik / Cormorant Garamond / Inter

## Запуск проекта

```bash
git clone <repo-url>
cd levefralov
npm install
npm run dev
```

Откройте `http://localhost:3000` в браузере.

## Структура

- `app/layout.tsx` — базовый layout, SEO‑метаданные (title, description, Open Graph, иконки), подключение шрифтов и глобального фона‑шума.
- `app/page.tsx` — главная страница, собирающая все секции (Hero, каталог, отзывы, контакты, футер).
- `components/Header.tsx` — фиксированная шапка сайта с навигацией и underline‑эффектами.
- `components/Hero.tsx` — первый экран с крупным логотипом, описанием «Отборный люкс‑streetwear с самыми низкими ценами» и CTA‑кнопкой.
- `components/WorksSection.tsx` — каталог с 3×3 карточками одежды, реальными фотографиями из `public/products` и ценниками `Lefevralov price`.
- `components/TestimonialsSection.tsx` — слайдер отзывов с рейтингом 5.0 / 5.0 и авто‑перелистыванием.
- `components/ContactSection.tsx` — контакты, кнопки перехода в **Telegram** и магазин на **Авито**, актуальный email.
- `components/Footer.tsx` — футер с копирайтом, ссылками на Telegram / Авито и текстом про персональный сервис.
- `app/globals.css` — глобальные стили, фон‑шум, glass‑карточки, анимации и кастомные утилити‑классы.
- `tailwind.config.js` — цвета бренда, шрифты и тени карточек.

## Кастомизация

- **Контакты и соцсети**
  - Обновите ссылки на Telegram и Авито в:
    - `components/ContactSection.tsx`
    - `components/Footer.tsx`
  - При необходимости поменяйте иконки в `public/telegram.png` и `public/avito-logo.png`.

- **Каталог и товары**
  - Данные карточек лежат в массиве `works` в `components/WorksSection.tsx`.
  - Фотографии — в `public/products/1.jpg` … `9.jpg`. Можно заменить своими, сохранив имена файлов или адаптировать пути.

- **SEO и иконки**
  - Заголовок, описание и Open Graph‑метаданные настраиваются в `app/layout.tsx`.
  - Фавиконки/иконки:
    - `public/favicon.ico`
    - `public/icon.svg`
    - `public/ic.svg`
    - `public/apple-touch-icon.png`

- **Цвета и стили**
  - Основные бренд‑цвета и тени: `tailwind.config.js` (`theme.extend.colors.brand`, `boxShadow`).
  - Глобальный фон, шум, «грязный» градиент и glass‑карточки: `app/globals.css`.

## Особенности и качества проекта

- Оптимизированный для **мобильных и десктопных устройств** layout (Tailwind + App Router).
- Аккуратные микс‑анимации на **Framer Motion** + CSS‑анимации, с учётом `prefers-reduced-motion`.
- Внимание к **доступности**: `aria-label`, `aria-hidden`, focus‑стили, достаточный размер кликабельных элементов.
- Оптимизированная загрузка изображений (`next/image`, `priority` для верхних карточек, `loading="lazy"` для остальных).

Проект находится в состоянии полностью готового и отполированного лендинга и может использоваться как база под реальный магазин или витрину. 
