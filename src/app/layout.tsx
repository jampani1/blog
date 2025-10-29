import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";

const AnimatedCursor = dynamic(
  () => import('react-animated-cursor'),
  { ssr: false }
);

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
    <html 
      lang="en" 
      className="h-full bg-page-light dark:bg-page-dark"
      suppressHydrationWarning
    >
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
      
      <body className={`${robotoMono.className} h-full flex flex-col min-h-full px-6`}>
        <AnimatedCursor
          innerSize={8} // O tamanho do ponto interno

          // 1. AJUSTE DE FLUIDEZ:
          // Tente valores entre 35 e 45. 
          // Um círculo externo maior dá uma sensação de "rastro" mais longo e fluido.
          outerSize={15} 

          // 2. REMOVENDO O EFEITO ROSQUINHA:
          // Trazemos de volta o preenchimento semi-transparente (ajuste 0.2, 0.3, 0.4...)
          outerAlpha={0.3}
          // Garantimos que o ponto interno use a cor do dark/light mode
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
          // Garantimos que o círculo externo também use a cor (sem borda)
          outerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
        
          // 3. REMOVENDO O EFEITO DE AUMENTAR (ESCALA):
          // Ao definir a escala interna e externa como 1, o cursor não mudará de tamanho.
          innerScale={1}
          outerScale={1}
        />
          
          {/* <Analytics /> */}
          <Header />
          <main className="mx-auto max-w-prose pb-4 flex-grow">
            {children}
            <ScrollToTop />
          </main>
          <footer className="w-full py-8 mt-12">
            <div className="max-w-3xl mx-auto px-4 flex flex-col items-center space-y-3">
              <p className="text-brand-dark dark:text-brand-light text-sm font-semibold">
                Passionate about code. Genetic and source.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="https://github.com/jampani1" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline"> GitHub </a>
                <span className="text-brand-dark/70 dark:text-brand-light/70">|</span>
                <a href="https://linkedin.com/in/mauriciojampani" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline"> LinkedIn </a>
              </div>
              <p className="text-brand-dark/70 dark:text-brand-light/70 text-sm">
                One commit at a time.
              </p>
              <p className="text-brand-dark/50 dark:text-brand-light/50 text-xs">
                © {new Date().getFullYear()} mausao. Todos os direitos reservados.
              </p>
            </div>
          </footer>
      </body>
    </html>
  ); 
}