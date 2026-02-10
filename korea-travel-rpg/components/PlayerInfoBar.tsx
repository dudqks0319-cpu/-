'use client';

interface PlayerInfoBarProps {
  name: string;
  gender: 'male' | 'female';
  level: number;
  exp: number;
  coins: number;
  stamps: number;
  totalStamps: number;
}

function getTitle(level: number): string {
  if (level >= 7) return '전국일주 도전자';
  if (level >= 4) return '중급 탐험가';
  return '초보 여행자';
}

export default function PlayerInfoBar({
  name,
  gender,
  level,
  exp,
  coins,
  stamps,
  totalStamps,
}: PlayerInfoBarProps) {
  const avatar = gender === 'male' ? '🧑' : '👩';
  const title = getTitle(level);
  const expForNextLevel = level * 100;
  const expPercent = Math.min((exp / expForNextLevel) * 100, 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-3 py-2 sm:px-4 rounded-b-xl">
      <div className="flex items-center gap-2 sm:gap-3 max-w-lg mx-auto text-xs sm:text-sm">
        <span className="flex items-center gap-1 shrink-0">
          <span className="text-lg sm:text-xl">{avatar}</span>
          <span className="font-bold truncate max-w-[60px] sm:max-w-[80px]">{name}</span>
        </span>

        <span className="text-gray-300">|</span>

        <span className="shrink-0">
          <span className="font-bold text-primary">Lv.{level}</span>
          <span className="ml-1 text-gray-500 text-[10px] sm:text-xs">{title}</span>
        </span>

        <span className="text-gray-300 hidden sm:inline">|</span>

        <div className="flex-1 min-w-[48px] hidden sm:block">
          <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${expPercent}%` }}
            />
          </div>
        </div>

        <span className="text-gray-300">|</span>

        <span className="shrink-0 font-bold text-gold">
          💰 {coins}
          <span className="hidden sm:inline"> TRAVEL</span>
        </span>

        <span className="text-gray-300">|</span>

        <span className="shrink-0 font-bold">
          🏅 {stamps}/{totalStamps}
        </span>
      </div>

      <div className="sm:hidden mt-1 max-w-lg mx-auto">
        <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-500"
            style={{ width: `${expPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
