// src/app/page.tsx (COMPLETO E REFINADO)

import Weather from '../components/Weather';
import GitHubActivity from '../components/GitHubActivity';
import BuilderHelpModal from '../components/BuilderHelpModal';
import Image from 'next/image';
import { Github, Linkedin, Mail, FileText, Cpu, MemoryStick, HardDrive, Monitor } from 'lucide-react'; // Todos os ícones importados

export default function Home() {
  return (
    // Grid principal com 3 colunas e espaçamento
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* ================================================================ */}
      {/* BLOCO 1: ABOUT (Texto Final) */}
      {/* ================================================================ */}
      <div className="md:col-span-2 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light">
          About
        </h2>
        <p className="mt-2 text-brand-dark/80 dark:text-brand-light/80">
          24yo developer holding a BSc in Biological Sciences.
          <br />
          Currently a Systems Analysis and Development student and Data Engineering Intern @ Bravium.
        </p>
      </div>

      {/* ================================================================ */}
      {/* BLOCO 2: LINKS (Com Ícones e Download CV) */}
      {/* ================================================================ */}
      <div className="md:col-span-1 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4">Links</h2>
        <div className="flex flex-col space-y-3">
          <a
            href="https://github.com/jampani1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/mauriciojampani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:mmjampani13@gmail.com"
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a
            href="/mauricio-jampani-cv.pdf" // Confirme o nome do seu PDF na pasta 'public/'
            download
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <FileText size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* ================================================================ */}
      {/* BLOCO 3: PROJETO EM DESTAQUE (Tatics Forge com GIF e Modal) */}
      {/* ================================================================ */}
      <div className="md:col-span-3 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light">
          Tatics Forge
        </h2>
        <div className="my-4 overflow-hidden rounded-lg border-2 border-brand-dark/10 dark:border-brand-light/10">
          <Image
            src="/site_overview.gif" // Confirme o nome do seu GIF na pasta 'public/'
            alt="Demo do projeto Tatics Forge"
            width={1280}
            height={720}
            unoptimized={true}
          />
        </div>
        <p className="mt-2 text-brand-dark/80 dark:text-brand-light/80">
          A theory-crafting website for the Merge Tactics community,
          built with a C# back-end API and a database to save builds.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-2 py-1 text-xs font-medium rounded-full">
            C# (.NET API)
          </span>
          <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-2 py-1 text-xs font-medium rounded-full">
            JavaScript
          </span>
          <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-2 py-1 text-xs font-medium rounded-full">
            SQL Server
          </span>
          <span className="bg-gray-600/20 text-gray-700 dark:bg-gray-400/20 dark:text-gray-300 px-2 py-1 text-xs font-medium rounded-full">
            Close repo
          </span>
        </div>
        <BuilderHelpModal />
      </div>

      {/* ================================================================ */}
      {/* BLOCO 4: WHAT I USE (Com Tags e Ícones de Hardware) */}
      {/* ================================================================ */}
      <div className="md:col-span-2 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4">
          What I Use
        </h2>
        <div className="space-y-4">
          {/* Seção Hardware */}
          <div>
            <h3 className="font-semibold text-brand-dark dark:text-brand-light mb-2">
              Hardware
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                <Cpu size={14} /> i5-10500H @ 2.50Hz
              </span>
              <span className="flex items-center gap-1.5 bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                <Monitor size={14} /> GTX 1650
              </span>
              <span className="flex items-center gap-1.5 bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                <MemoryStick size={14} /> 8.0 GB RAM
              </span>
              <span className="flex items-center gap-1.5 bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                <HardDrive size={14} /> SSD 500 GB
              </span>
            </div>
          </div>
          {/* Seção Core Tech */}
          <div>
            <h3 className="font-semibold text-brand-dark dark:text-brand-light mb-2">
              Core Tech
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                Python
              </span>
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                C# (.NET)
              </span>
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                JavaScript
              </span>
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                SQL
              </span>
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                Next.js
              </span>
            </div>
          </div>
          {/* Seção Tools & Software */}
          <div>
            <h3 className="font-semibold text-brand-dark dark:text-brand-light mb-2">
              Tools & Software
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                VS Code
              </span>
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                DBeaver
              </span>
              <span className="bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                Git
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* BLOCO 5: STATUS & CLIMA (Usando o Componente Weather) */}
      {/* ================================================================ */}
      <div className="md:col-span-1 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        {/* O Weather.tsx agora contém o DiscordStatus */}
        <Weather /> 
      </div>

      {/* ================================================================ */}
      {/* BLOCO 6: GITHUB (Usando o Componente GitHubActivity) */}
      {/* ================================================================ */}
      <div className="md:col-span-3 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <GitHubActivity />
      </div>

    </main>
  )
}