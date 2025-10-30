// Um componente reutilizável para cada "Card de Projeto"
function ProjectCard({ title, description, stack, githubLink }: {
  title: string;
  description: string;
  stack: string;
  githubLink: string;
}) {
  return (
    <div className="w-full bg-brand-light dark:bg-brand-dark rounded-lg p-6">
      <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light">
        {title}
      </h2>
      <p className="mt-2 text-brand-dark/80 dark:text-brand-light/80">
        {description}
      </p>
      <p className="mt-4 text-sm font-medium text-brand-dark dark:text-brand-light">
        Tech Stack: {stack}
      </p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
      >
        View on GitHub
      </a>
    </div>
  )
}

// A Página Principal de Projetos
export default function ProjectsPage() {
  return (
    <section>
      {/* Título da Página */}
      <h1 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-6">
        Projects
      </h1>
      
      {/* Lista de Cards (com espaçamento) */}
      <div className="space-y-8">
        
        {/* PROJETO 1: RIDE PRICE ENGINE */}
        <ProjectCard
          title="Ride Price Engine (Uber & Lyft)"
          description="A complete Machine Learning pipeline to predict ride prices for Uber & Lyft, using a public Boston dataset. The project involved exploratory data analysis, feature engineering, and a comparison of multiple regression models to find the most accurate solution."
          stack="Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Joblib"
          githubLink="https://github.com/jampani1/ride-price-engine"
        />
        
        {/* adicionar aqui o projeto do ps da bravium? */}

        {/* Adicione mais ProjectCard aqui no futuro (ex: seu TCC) */}
        
      </div>
    </section>
  )
}