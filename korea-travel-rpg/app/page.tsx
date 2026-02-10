'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGameStore } from '@/stores/gameStore';
import { cities } from '@/data/cities';
import KoreaMap from '@/components/KoreaMap';
import PlayerInfoBar from '@/components/PlayerInfoBar';

const SVG_POSITIONS: Record<string, { x: number; y: number }> = {
  seoul: { x: 380, y: 230 },
  incheon: { x: 340, y: 250 },
  suwon: { x: 380, y: 280 },
  busan: { x: 570, y: 620 },
  jeju: { x: 310, y: 820 },
};

export default function Home() {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const player = useGameStore((s) => s.player);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && !player) {
      router.push('/character');
    }
  }, [isHydrated, player, router]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!isHydrated || !player) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-bounce">🗺️</div>
          <p className="text-lg font-bold text-primary">한국 여행 RPG</p>
          <p className="text-sm text-gray-400 mt-2">로딩 중...</p>
        </div>
      </div>
    );
  }

  const cityMapData = cities.map((city) => {
    const completedCount = city.missions.filter((mId) =>
      player.completedMissions.includes(mId)
    ).length;

    return {
      id: city.id,
      name: city.name,
      mapPosition: SVG_POSITIONS[city.id] ?? {
        x: city.mapPosition.x * 8,
        y: city.mapPosition.y * 10,
      },
      themeColor: city.themeColor,
      isUnlocked: player.level >= city.requiredLevel,
      isCompleted: completedCount === city.missions.length,
      completedMissions: completedCount,
      totalMissions: city.missions.length,
    };
  });

  const handleCityClick = (cityId: string) => {
    const city = cities.find((c) => c.id === cityId);
    if (!city) return;

    if (player.level < city.requiredLevel) {
      setToast(`레벨 ${city.requiredLevel} 이상 필요합니다`);
      return;
    }

    router.push(`/city/${cityId}`);
  };

  return (
    <div className="min-h-screen bg-warm pb-20">
      <PlayerInfoBar
        name={player.name}
        gender={player.gender}
        level={player.level}
        exp={player.exp}
        coins={player.coins}
        stamps={player.stamps.length}
        totalStamps={cities.length}
      />

      <main className="pt-16 pb-4 px-4 flex flex-col items-center">
        <h1 className="text-center text-lg font-bold text-primary mb-1">
          🗺️ 한국 여행 지도
        </h1>
        <p className="text-center text-xs text-gray-500 mb-3">
          도시를 터치하여 여행을 시작하세요!
        </p>
        <KoreaMap cities={cityMapData} onCityClick={handleCityClick} />
      </main>

      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg text-sm whitespace-nowrap">
            {toast}
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          <button className="flex flex-col items-center gap-0.5 text-primary">
            <span className="text-xl">🗺️</span>
            <span className="text-xs font-medium">지도</span>
          </button>
          <button
            className="flex flex-col items-center gap-0.5 text-gray-400"
            onClick={() => router.push('/stamp-book')}
          >
            <span className="text-xl">📕</span>
            <span className="text-xs font-medium">스탬프</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-gray-400">
            <span className="text-xl">⚙️</span>
            <span className="text-xs font-medium">설정</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
