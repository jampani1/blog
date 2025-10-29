"use client"; 

import { useEffect, useState } from "react";
import DiscordStatus from './DiscordStatus'; 
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Haze, Wind, ThermometerSun, ArrowUp, ArrowDown } from 'lucide-react'; 

const LATITUDE = -22.43; 
const LONGITUDE = -46.95; 
const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,apparent_temperature,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto`; 
const ADVICE_API_URL = "https://api.adviceslip.com/advice";
const LOCATION_NAME = "Somewhere in SP's countryside (BR)"; 

function getWeatherInfo(code: number): { icon: React.ReactNode; description: string } {
    if (code === 0) return { icon: <Sun size={24} />, description: "Clear" }; 
    if (code <= 3) return { icon: <Cloud size={24} />, description: "Cloudy" };
    if (code <= 48) return { icon: <Haze size={24} />, description: "Fog" }; 
    if (code <= 55) return { icon: <CloudRain size={24} />, description: "Drizzle" }; 
    if (code <= 65) return { icon: <CloudRain size={24} />, description: "Rain" }; 
    if (code <= 77) return { icon: <CloudSnow size={24} />, description: "Snow" }; 
    if (code <= 99) return { icon: <CloudLightning size={24} />, description: "Storm" }; 
    return { icon: <Cloud size={24} />, description: "Cloudy" }; 
}

export default function Weather() {
  const [temp, setTemp] = useState<string | null>(null);
  const [feelsLike, setFeelsLike] = useState<string | null>(null);
  const [windSpeed, setWindSpeed] = useState<string | null>(null); 
  const [maxTemp, setMaxTemp] = useState<string | null>(null); 
  const [minTemp, setMinTemp] = useState<string | null>(null); 
  const [weatherCode, setWeatherCode] = useState<number | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [currentTime, setCurrentTime] = useState<string | null>(null); 
  const [adviceSlip, setAdviceSlip] = useState<string | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState(true);

  // Efeito para buscar o Clima 
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(WEATHER_API_URL);
        if (!response.ok) throw new Error('Failed to fetch weather');
        const data = await response.json();
        
        if (data.current) {
          setTemp(Math.round(data.current.temperature_2m).toString());
          setFeelsLike(Math.round(data.current.apparent_temperature).toString());
          setWindSpeed(Math.round(data.current.windspeed_10m).toString());
          setWeatherCode(data.current.weathercode); // Weathercode também vem de 'current' agora
        } else {
            throw new Error('Weather API response missing "current" data');
        }

        if (data.daily?.temperature_2m_max?.[0] !== undefined) setMaxTemp(Math.round(data.daily.temperature_2m_max[0]).toString());
        if (data.daily?.temperature_2m_min?.[0] !== undefined) setMinTemp(Math.round(data.daily.temperature_2m_min[0]).toString());
      } catch (error) { console.error("Weather fetch error:", error); setTemp("--"); setFeelsLike("--"); setWindSpeed("--"); setMaxTemp("--"); setMinTemp("--"); setWeatherCode(null); } 
      finally { setLoadingWeather(false); }
    }
    fetchWeather();
  }, []);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })); 
    const intervalId = setInterval(() => { setCurrentTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })); }, 60000); 
    return () => clearInterval(intervalId); 
  }, []); 

  useEffect(() => {
    async function fetchAdvice() {
      try {
        const response = await fetch(ADVICE_API_URL);
        if (!response.ok) throw new Error('Failed to fetch advice');
        const data = await response.json(); // API retorna JSON com { slip: { id, advice } }
        if (data.slip && data.slip.advice) {
          setAdviceSlip(data.slip.advice);
        } else {
          throw new Error('Invalid advice format');
        }
      } catch (error) { console.error("Advice fetch error:", error); setAdviceSlip("Could not load advice right now."); } 
      finally { setLoadingAdvice(false); }
    }
    fetchAdvice();
  }, []);

  const weatherInfo = weatherCode !== null ? getWeatherInfo(weatherCode) : null;

  return (
    <div className="flex flex-col justify-between h-full min-h-[180px]"> 
      <div className="mb-2">
        <div className="min-w-0"> <DiscordStatus /> </div>
        <div className="text-right">
          <span className="text-sm font-medium text-brand-dark/70 dark:text-brand-light/70">
            {currentTime || '...'} (BRT)
          </span>
        </div>
      </div>

      <div className="my-2 text-center text-sm text-brand-dark/70 dark:text-brand-light/70 italic px-2">
        {loadingAdvice ? (
          <span>Loading random advice...</span>
        ) : (
          <span>"{adviceSlip}"</span>
        )}
      </div>
      {/* ================================================================= */}

      <div className="text-right"> 
        {loadingWeather ? (<p className="text-3xl font-bold text-brand-dark dark:text-brand-light">...</p>) : (
          <>
            <div className="flex justify-end items-center gap-2 mb-1">
               {weatherInfo && weatherInfo.icon}
               <p className="text-4xl font-bold text-brand-dark dark:text-brand-light"> {temp}°C </p>
            </div>
            {weatherInfo && ( <p className="text-sm text-brand-dark/80 dark:text-brand-light/80 mb-2"> {weatherInfo.description} </p> )}
            <div className="space-y-1 text-xs text-brand-dark/70 dark:text-brand-light/70">
              <div className="flex justify-end items-center gap-2">
                 <div className="flex items-center gap-0.5"><ArrowUp size={12} /><span>{maxTemp}°</span></div>
                 <div className="flex items-center gap-0.5"><ArrowDown size={12} /><span>{minTemp}°</span></div>
              </div>
               <div className="flex justify-end items-center gap-1"> <ThermometerSun size={12} /> <span>Feels like {feelsLike}°C</span> </div>
               <div className="flex justify-end items-center gap-1"> <Wind size={12} /> <span>{windSpeed} km/h Wind</span> </div>
            </div>
            <p className="text-xs text-brand-dark/60 dark:text-brand-light/60 mt-2"> {LOCATION_NAME} </p>
          </>
        )}
      </div>
    </div>
  );
}