// src/components/GitHubActivity.tsx (O CÓDIGO CORRIGIDO)

"use client"; // Precisa ser um componente do cliente

import { useState, useEffect } from 'react'; // Precisamos disso agora
import ActivityCalendar from 'react-activity-calendar';

// Este é o seu nome de usuário do GitHub.
const username = "jampani1";
// Esta é uma API que formata os dados para nós
const API_URL = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

// As cores que o gráfico vai usar (mesmas de antes)
const theme = {
  light: ['#f5f5f4', '#fed7aa', '#fb923c', '#f97316', '#ea580c'],
  dark:  ['#292524', '#fed7aa', '#fb923c', '#f97316', '#ea580c'],
};

// Tipo para ajudar o TypeScript a entender os dados
type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function GitHubActivity() {
  // Estados para guardar os dados e o carregamento
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Busca os dados quando o componente é montado
  useEffect(() => {
    // 1. Define a data de hoje
    const today = new Date();

    // 2. Define a data de 6 meses atrás
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // 3. Filtra os dados recebidos da API
        const filteredData = data.contributions.filter((activity: Activity) => {
        const activityDate = new Date(activity.date);
        // Mantém apenas atividades que são DEPOIS de 6 meses atrás
        // E ANTES ou IGUAL a hoje (para não mostrar datas futuras)
          return activityDate >= sixMonthsAgo && activityDate <= today;
        });

        setData(filteredData); // 4. Salva os dados JÁ FILTRADOS
        
        // ======================= FIM DAS MUDANÇAS =======================
        
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []); // O array vazio [] faz isso rodar só uma vez

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4">
        GitHub History
      </h2>
      
      {/* Mostra um "Carregando..." enquanto os dados não chegam */}
      {loading && (
        <div className="w-full h-32 mt-2 bg-brand-dark/10 dark:bg-brand-light/10 rounded flex items-center justify-center">
          <p className="text-brand-dark/50 dark:text-brand-light/50">
            Loading contribution data...
          </p>
        </div>
      )}

      {/* Só renderiza o calendário DEPOIS que os dados chegarem */}
      {data && (
        <div className="flex justify-center">
        <ActivityCalendar
          data={data}          // <--- A PROP CORRETA!
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={theme}
          hideColorLegend
        />
        </div>
      )}
    </div>
  );
}