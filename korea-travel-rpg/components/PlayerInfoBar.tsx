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

function getLevelTitle(level: number): string {
  if (level >= 7) return '전국일주 도전자';
  if (level >= 4) return '중급 탐험가';
  return '초보 여행자';
}

function getExpPercentage(exp: number, level: number): number {
  const requiredExp = level * 30;
  return Math.min((exp / requiredExp) * 100, 100);
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
  const title = getLevelTitle(level);
  const expPercent = getExpPercentage(exp, level);

  return (
    <div className="bg-white shadow-md px-3 py-2 sm:px-4 sm:py-3 rounded-b-xl">
      <div className="flex items-center gap-2 sm:gap-3 max-w-lg mx-auto">
        {/* 캐릭터 + 이름 */}
        <div className="flex items-center gap-1 min-w-0">
          <span className="text-xl sm:text-2xl">{avatar}</span>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold truncate">{name}</p>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Lv.{level} {title}
            </p>
          </div>
        </div>

        {/* 경험치 바 */}
        <div className="flex-1 min-w-0">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${expPercent}%` }}
            />
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-0.5">
            EXP {exp}/{level * 30}
          </p>
        </div>

        {/* 코인 */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-bold text-gold">
            💰 {coins}
          </p>
        </div>

        {/* 스탬프 */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-bold text-primary">
            🏅 {stamps}/{totalStamps}
          </p>
        </div>
      </div>
    </div>
  );
}
