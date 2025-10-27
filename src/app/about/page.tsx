import Image from 'next/image';

export default function AboutPage() {
  return (
    <article>
      {/* Título da Página */}
      <h1 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-6">
        About Me
      </h1>
      
      {/* Container do Texto (com espaçamento entre parágrafos) */}
      <div className="space-y-4 text-brand-dark/80 dark:text-brand-light/80">
        
        {/* Parágrafo 1: A Origem */}
        <p>
          Born in the interior of São Paulo, I've always been drawn to online games and computers. By the end of high school, I discovered a deep fascination for biology, specifically in the field of genetics.
        </p>
        
        {/* Parágrafo 2: A Formação (com os links) */}
        <p>
          This led me to pursue a BSc in Biological Sciences (2020-2025) in Piracicaba at the {' '}
          <a 
            href="https://www.esalq.usp.br/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            University of São Paulo (USP/ESALQ)
          </a>. 
          Throughout my degree, I actively sought to merge these two interests. I focused on analyzing biological data to solve complex questions, culminating in my undergraduate thesis on the {' '}
          <a 
            href="https://bdta.abcd.usp.br/item/003258173" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            mitochondrial genome annotation of a fungus
          </a>.
        </p>
        
        {/* Parágrafo 3: A Transição (A resposta para sua pergunta) */}
        <p>
          After graduating and seeking my first professional opportunity, I decided to formally pivot and lean into the computational side of my skills. I enrolled in a <strong>Systems Analysis and Development</strong> program to build a stronger foundation in software engineering, while seeking to build upon the data analysis abilities I developed during my biology degree.
        </p>

        {/* Parágrafo 4: O Presente */}
        <p>
          This path has led me to my current role as a <strong>Data Engineering Intern at Bravium</strong>, where I can apply my analytical background to build data-focused solutions and explore my passion for technology.
        </p>

        {/* Parágrafo 5: Projetos */}
        <p>
          Outside of work, I'm always building. I'm developing <strong>Tatics Forge</strong> (a C# .NET & JavaScript web app), and expanding my data portfolio with projects like the <strong>Ride Price Engine</strong>, where I engineered a regression model to accurately predict Uber & Lyft ride prices using Python and Scikit-learn.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Image
          src="/mau-octocat.png" 
          alt="Minha versão do Octocat - Mascote do GitHub." 
          width={500} 
          height={550}
          className="rounded-lg"
          />
      </div>

    </article>
  )
}