import Link from "next/link";

const AVITO_URL = "https://www.avito.ru/brands/7fd5c9d241506e3e9cba32aa3b3ffc5d/all?src=sharing&sellerId=f2c919d8b8f27cb00f94239d775c1bbd";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/95">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="section-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 text-sm text-gray-400 rotate-[-0.5deg]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-label" aria-hidden="true">
            handpicked
          </p>
          <p className="font-serif text-base text-white">© 2026 Lefevralov Store. Все права защищены.</p>
          <p>
            Уличная высокая мода, лимитированные дропы и вещи, которые живут дольше одного сезона.
            Персональный подбор и сопровождение каждой покупки.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm sm:items-end rotate-[0.5deg]">
          <div className="flex gap-4">
            <Link href="https://t.me/Lefevralov" target="_blank" rel="noreferrer" className="text-gray-300 transition-colors duration-200 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:rounded">Telegram</Link>
            <span className="text-gray-600" aria-hidden="true">·</span>
            <Link href={AVITO_URL} target="_blank" rel="noreferrer" className="text-gray-300 transition-colors duration-200 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:rounded">Авито</Link>
          </div>
          <p className="text-xs text-gray-500">Сделано с любовью к минимализму и эстетике высокой моды.</p>
        </div>
      </div>
    </footer>
  );
}

