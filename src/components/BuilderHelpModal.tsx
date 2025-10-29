// src/components/BuilderHelpModal.tsx (COM 2 BOTÕES CUSTOMIZADOS)

"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

export default function BuilderHelpModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* O Link/Botão que abre o modal */}
      <div className="mt-4">
        <button
          type="button"
          onClick={openModal}
          // Traduzido para inglês também
          className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium"
        >
          Want to collaborate on the builder layout?
        </button>
      </div>

      {/* O Modal (Dialog) */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        {/* O fundo escuro (backdrop) */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Container para centralizar o modal */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-page-light dark:bg-page-dark p-6 shadow-xl">
            
            {/* Título do Modal */}
            <Dialog.Title as="h3" className="text-xl font-bold text-brand-dark dark:text-brand-light">
              Challenge: Hexagon Builder
            </Dialog.Title>
            
            {/* ================================================================ */}
            {/* 1. TEXTO ATUALIZADO PARA INGLÊS */}
            {/* ================================================================ */}
            <p className="mt-2 text-brand-dark/80 dark:text-brand-light/80">
              I am looking for the best way to implement the 'hexagon builder'. The challenge is to create a mockup/layout that is intuitive for the front-end.
            </p>

            {/* O GIF novo */}
            <div className="my-4 overflow-hidden rounded-lg border-2 border-brand-dark/10 dark:border-brand-light/10">
              <Image
                src="/help_mockup_js.gif"
                alt="demo builder"
                width={1280} 
                height={720} 
                unoptimized={true} 
              />
            </div>

            {/* ================================================================ */}
            {/* 2. BOTÕES CUSTOMIZADOS (Primário e Secundário) */}
            {/* ================================================================ */}
            <div className="mt-6 flex items-center gap-4">
              
              {/* Botão Primário: Email (usa o seu email) */}
              <a
                href="mailto:mmjampani13@gmail.com"
                className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
              >
                Send an Email
              </a>

              {/* Botão Secundário: Fechar (estilo "fantasma") */}
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg border border-brand-dark/30 px-4 py-2 text-sm font-medium text-brand-dark/70 hover:bg-brand-dark/10 dark:border-brand-light/30 dark:text-brand-light/70 dark:hover:bg-brand-light/10 transition-colors"
              >
                Got it
              </button>
            </div>
            {/* ================================================================ */}

          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}