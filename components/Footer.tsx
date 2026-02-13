import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="section-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-gray-400">
          <p className="font-serif text-base text-white">
            © 2026 Lefevralov Store. Все права защищены.
          </p>
          <p>
            Уличная высокая мода, лимитированные дропы и вещи, которые живут
            дольше одного сезона.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm sm:items-end">
          <div className="flex gap-3">
            <Link
              href="https://t.me/Lefevralov"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 transition-colors hover:text-brand-gold"
            >
              Telegram
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 transition-colors hover:text-brand-gold"
            >
              ВКонтакте
            </Link>
          </div>
          <p className="text-xs text-gray-500">
            Сделано с любовью к минимализму и эстетике высокой моды.
          </p>
        </div>
      </div>
    </footer>
  );
}

