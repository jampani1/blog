// Em: src/app/now/page.tsx

export const metadata = {
  title: "O que estou fazendo agora",
  description: "Uma breve atualização sobre meus estudos, projetos e foco atual.",
};

export default function NowPage() {
  return (
    <article>
      <h2>O que estou fazendo agora</h2>
      
      <p>
        Esta página é um resumo do que estou focado neste momento da minha 
        vida profissional e acadêmica.
      </p>

      <h3>Estudando</h3>
      <ul>
        <li>Análise e Desenvolvimento de Sistemas na FATEC;</li>
        <li>Next.js e TypeScript para desenvolvimento web moderno;</li>
        <li>Conceitos de Data Engineering (meu estágio atual).</li>
      </ul>

      <h3>Trabalhando em</h3>
      <ul>
        <li>
          Finalizando a V1 do meu blog/portfólio pessoal (este site!);
        </li>
        <li>
          Planejando meu próximo projeto... (talvez o Tatics Forge?)
        </li>
      </ul>
      
      <h3>Foco</h3>
      <p>
        Meu foco principal é absorver o máximo de conhecimento no meu 
        estágio, evoluir minhas habilidades como desenvolvedor e me preparar
        para minha primeira oportunidade efetiva na área de tecnologia.
      </p>

      <p>
        Última atualização: Outubro de 2025.
      </p>
    </article>
  );
}