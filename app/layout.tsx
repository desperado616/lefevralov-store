import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Подключаем более спокойные и «high fashion» шрифты.
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: "Lefevralov Store",
  description:
    "Только оригинальный шмот. Мы ценим личное общение и доверие клиентов, поэтому уделяем много внимания сервису и деталям.",
  metadataBase: new URL("https://lefevralov-store.vercel.app"),
  openGraph: {
    title: "Lefevralov Store",
    description:
      "Только оригинальный шмот. Мы ценим личное общение и доверие клиентов, поэтому уделяем много внимания сервису и деталям.",
    type: "website",
    url: "https://lefevralov-store.vercel.app"
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/ic.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0b10" };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className={`${inter.className} bg-brand-navy text-white`}>
        {/* Скрытая ссылка для быстрого перехода к контенту с клавиатуры */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-brand-gold focus:text-slate-900"
        >
          Перейти к основному содержимому
        </a>
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 z-0 page-noise" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}


