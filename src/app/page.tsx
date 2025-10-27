import Weather from '../components/Weather'
import GitHubActivity from '../components/GitHubActivity'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Home() {
  return (
    // Grid principal com 3 colunas e espaçamento
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* ================================================= */}
      {/* BLOCO 1: ABOUT (Atualizado com "holding a BSc") */}
      {/* ================================================= */}
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

      {/* BLOCO 2: LINKS (Ocupa 1 coluna) */}
      <div className="md:col-span-1 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4">Links</h2>
        <div className="flex flex-col space-y-3"> {/* Aumentei o space-y para 3 */}
          
          <a 
            href="https://github.com/jampani1" 
            target="_blank" 
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <Github size={18} /> {/* Ícone */}
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/mauriciojampani" 
            target="_blank" 
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <Linkedin size={18} /> {/* Ícone */}
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="mailto:mmjampani13@gmail.com" 
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <Mail size={18} /> {/* Ícone */}
            <span>Email</span>
          </a>

          <a 
            href="/mauricio-jampani-cv.pdf"
            download
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
          >
            <FileText size={18} /> {/* Ícone */}
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* BLOCO 3: PROJETO EM DESTAQUE (Ocupa 3 colunas) */}
      <div className="md:col-span-3 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light">
          Tatics Forge
        </h2>
        <p className="mt-2 text-brand-dark/80 dark:text-brand-light/80">
          Aqui colocar um gif da pagina? como mostrar / falar do site
        </p>
      </div>

{/* BLOCO 4: WHAT I USE (Ocupa 2 colunas) */}
      <div className="md:col-span-2 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light">What I Use</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          
          {/* Coluna 1: Hardware */}
          <div>
            <h3 className="font-semibold text-brand-dark dark:text-brand-light">Hardware</h3>
            <ul className="list-disc list-inside text-brand-dark/80 dark:text-brand-light/80">
              <li>i5-10500H CPU @ 2.50Hz</li>
              <li>NVIDIA GeForce GTX 1650</li>
              <li>8.0 GB RAM</li>
              <li>SSD 500 GB</li>
            </ul>
          </div>
          
          {/* Coluna 3: Software */}
          <div>
            <h3 className="font-semibold text-brand-dark dark:text-brand-light">Software</h3>
            <ul className="list-disc list-inside text-brand-dark/80 dark:text-brand-light/80">
              <li>VS Code</li>
              <li>Arc</li>
              <li>DBeaver</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BLOCO 5: STATUS & CLIMA (Ocupa 1 coluna) */}
      <div className="md:col-span-1 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <Weather />
      </div>

      {/* BLOCO 6: GITHUB (Ocupa 3 colunas) */}
      <div className="md:col-span-3 bg-brand-light dark:bg-brand-dark rounded-lg p-6">
        <GitHubActivity />
      </div>

    </main>
  )
}