// src/components/Weather.tsx

"use client";

import { useEffect, useState } from "react";

const LATITUDE = -22.43;
const LONGITUDE = -46.95;


const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true`;

export default function Weather() {
  const [temp, setTemp] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Erro ao buscar dados do clima');
        }

        const data = await response.json();
        
        // Arredonda a temperatura e formata
        setTemp(Math.round(data.current_weather.temperature).toString());

      } catch (error) {
        console.error(error);
        setTemp("  "); // Mostra "  " em caso de erro
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []); // O array vazio [] faz isso rodar só uma vez

  // HTML que será mostrado
  return (
    <>
      {/* Status (Vamos deixar estático por enquanto) */}
      <div className="flex items-center space-x-2">
        {/* Você pode mudar o texto aqui para algo como "Studying..." */}
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <span className="text-brand-dark/80 dark:text-brand-light/80">
          Offline
        </span>
      </div>
      
      {/* Clima */}
      <div className="mt-4">
        {loading ? (
          // O que mostrar enquanto carrega
          <p className="text-3xl font-bold text-brand-dark dark:text-brand-light">
            ... °C
          </p>
        ) : (
          // O que mostrar depois que carregar
          <p className="text-3xl font-bold text-brand-dark dark:text-brand-light">
            {temp} °C
          </p>
        )}
        <p className="text-brand-dark/80 dark:text-brand-light/80">
        Current nearby me
        </p>
      </div>
    </>
  );
}