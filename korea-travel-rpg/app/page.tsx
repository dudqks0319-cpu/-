'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGameStore } from '@/stores/gameStore';
import { cities } from '@/data/cities';
import KoreaMap from '@/components/KoreaMap';
import PlayerInfoBar from '@/components/PlayerInfoBar';
import BottomNav from '@/components/BottomNav';
import SettingsModal from '@/components/SettingsModal';
import Toast from '@/components/Toast';

export default function Home() {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'info' | 'error' } | null>(null);

  const player = useGameStore((s) => s.player);
  const isCityUnlocked = useGameStore((s) => s.isCityUnlocked);
  const isMissionCompleted = useGameStore((s) => s.isMissionCompleted);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && !player) {
      router.push('/character');
    }
  }, [isHydrated, player, router]);

  if (!isHydrated || !player) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-bounce">🇰🇷</div>
          <p className="text-lg font-bold text-primary">한국 여행 RPG</p>
          <p className="text-sm text-gray-400 mt-2">로딩 중...</p>
        </div>
      </div>
    );
  }

  const cityMarkers = cities.map((city) => {
    const unlocked = isCityUnlocked(city.id);
    const completedCount = city.missions.filter((mId) =>
      isMissionCompleted(mId)
    ).length;
    const isCompleted = completedCount === city.missions.length;

    return {
      id: city.id,
      name: city.name,
      mapPosition: city.mapPosition,
      themeColor: city.themeColor,
      isUnlocked: unlocked,
      isCompleted,
      completedMissions: completedCount,
      totalMissions: city.missions.length,
    };
  });

  const handleCityClick = (cityId: string) => {
    const city = cities.find((c) => c.id === cityId);
    if (!city) return;

    if (!isCityUnlocked(cityId)) {
      setToast({
        message: `레벨 ${city.requiredLevel} 이상 필요합니다!`,
        type: 'info',
      });
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

      <div className="px-4 pt-4">
        <h1 className="text-center text-lg font-bold text-primary mb-1">
          🗺️ 한국 여행 지도
        </h1>
        <p className="text-center text-xs text-gray-500 mb-4">
          도시를 터치하여 여행을 시작하세요!
        </p>

        <KoreaMap cities={cityMarkers} onCityClick={handleCityClick} />
      </div>

      <BottomNav activeTab="map" onSettingsClick={() => setShowSettings(true)} />

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={true}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
