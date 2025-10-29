// src/components/DiscordStatus.tsx

"use client";

import { useLanyard } from 'use-lanyard';
import { Music, Code, Circle } from 'lucide-react';

const DISCORD_ID = "259879487125061632";

function StatusDisplay({ icon, text }: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm text-brand-dark/80 dark:text-brand-light/80 truncate">
        {text}
      </span>
    </div>
  );
}


export default function DiscordStatus() {
  // 1. Usamos o "hook" para buscar seus dados em tempo real
  const { data } = useLanyard(DISCORD_ID);

  // 2. Estado de Carregamento (enquanto os dados não chegam)
  if (!data) {
    return (
      <StatusDisplay
        icon={<Circle size={14} className="text-gray-400" />}
        text="Loading status..."
      />
    );
  }

  // 3. Estado Offline
  if (data.discord_status === 'offline') {
    return (
      <StatusDisplay
        icon={<Circle size={14} className="text-gray-500 fill-gray-500" />}
        text="Offline"
      />
    );
  }

  // 4. Estado Ativo: Verificando Atividades (Spotify primeiro)
  if (data.spotify) {
    return (
      <StatusDisplay
        icon={<Music size={16} className="text-green-500" />}
        text="Listening to Spotify"
      />
    );
  }

  // 5. Estado Ativo: Verificando VS Code
  const vsCodeActivity = data.activities.find(a => a.name === 'Visual Studio Code');
  if (vsCodeActivity) {
    return (
      <StatusDisplay
        icon={<Code size={16} className="text-blue-500" />}
        text="Coding..."
      />
    );
  }

  // 6. Estado Padrão: Online (mas sem atividade especial)
  return (
    <StatusDisplay
      icon={<Circle size={14} className="text-green-500 fill-green-500" />}
      text="Online"
    />
  );
}