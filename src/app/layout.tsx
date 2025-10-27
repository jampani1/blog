import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";
// import { Analytics } from "@vercel/analytics/next";

// EDITE ISTO AQUI
export const metadata: Metadata = {
  title: 'Maurício J de Souza',
  description: 'personal site',
}
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular (400) e Bold (700)
  style: ["normal", "italic"], // Inclui estilos normal e itálico
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-page-light dark:bg-page-dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${robotoMono.className} min-h-full px-6`}>
      {/*<Analytics />*/}
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="w-full py-8 mt-12 border-t border-brand-dark/20 dark:border-brand-light/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-brand-dark/70 dark:text-brand-light/70">
            © {new Date().getFullYear()} mausao. Todos os direitos reservados.
          </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
