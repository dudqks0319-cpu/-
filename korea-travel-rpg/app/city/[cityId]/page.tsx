"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { useGameStore } from "@/stores/gameStore";
import { cities } from "@/data/cities";
import { missions } from "@/data/missions";
import MissionQuiz from "@/components/MissionQuiz";
import CelebrationPopup from "@/components/CelebrationPopup";
import { getLevelTitle } from "@/utils/levelUtils";
import { CITY_COMPLETE_REWARD } from "@/data/missions";

const landmarkEmoji: Record<string, string> = {
  "경복궁": "🏯",
  "광장시장": "🍜",
  "남산타워": "🗼",
  "차이나타운": "🏮",
  "짜장면박물관": "🍝",
  "월미도": "🎡",
  "수원화성": "🏰",
  "수원갈비골목": "🥩",
  "화성행궁": "🏛️",
  "해운대": "🏖️",
  "자갈치시장": "🐟",
  "감천문화마을": "🎨",
  "성산일출봉": "🌅",
  "흑돼지거리": "🐷",
  "한라산": "⛰️",
};

export default function CityPage() {
  const router = useRouter();
  const params = useParams();
  const cityId = params.cityId as string;

  const { player, isMissionCompleted, completeMission } = useGameStore();

  const [activeMissionId, setActiveMissionId] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [prevLevel, setPrevLevel] = useState<number | null>(null);

  const city = cities.find((c) => c.id === cityId);
  const cityMissions = missions.filter((m) => m.cityId === cityId);
  const completedCount = cityMissions.filter((m) => isMissionCompleted(m.id)).length;
  const allComplete = completedCount === cityMissions.length;

  const activeMission = activeMissionId
    ? cityMissions.find((m) => m.id === activeMissionId)
    : null;

  useEffect(() => {
    if (!player) {
      router.replace("/character");
    }
  }, [player, router]);

  const handleMissionComplete = useCallback(() => {
    if (!activeMissionId) return;
    const levelBefore = player?.level ?? 1;
    setPrevLevel(levelBefore);

    completeMission(activeMissionId, cityId);
    setActiveMissionId(null);

    const updatedCompletedCount = cityMissions.filter(
      (m) => m.id === activeMissionId || isMissionCompleted(m.id)
    ).length;

    if (updatedCompletedCount === cityMissions.length) {
      setTimeout(() => setShowCelebration(true), 300);
    }
  }, [activeMissionId, cityId, completeMission, cityMissions, isMissionCompleted, player?.level]);

  useEffect(() => {
    if (prevLevel !== null && player && player.level > prevLevel) {
      setTimeout(() => setShowLevelUp(true), showCelebration ? 600 : 300);
      setPrevLevel(null);
    }
  }, [player?.level, prevLevel, showCelebration, player]);

  if (!player || !city) return null;

  return (
    <div className="min-h-screen bg-warm px-4 py-6 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => router.push("/")}
          className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1"
        >
          <span>&larr;</span>
          <span>지도로 돌아가기</span>
        </button>
      </div>

      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: city.themeColor }}
      >
        {city.name}
      </h1>
      <p className="text-gray-600 mb-6 whitespace-pre-line text-sm">
        {city.description}
      </p>

      <div className="space-y-4 mb-8">
        {cityMissions.map((mission) => {
          const completed = isMissionCompleted(mission.id);
          const emoji = landmarkEmoji[mission.landmark] ?? "📍";

          return (
            <div
              key={mission.id}
              className={`bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 transition-all ${
                completed ? "bg-green-50 border border-green-200" : ""
              }`}
            >
              <div className="text-3xl flex-shrink-0">{emoji}</div>

              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800">{mission.name}</p>
                <p className="text-sm text-gray-500">
                  {completed ? "EXP+10 획득!" : "퀴즈에 도전!"}
                </p>
              </div>

              <div className="flex-shrink-0">
                {completed ? (
                  <span className="text-2xl">✅</span>
                ) : (
                  <button
                    onClick={() => setActiveMissionId(mission.id)}
                    className="text-white text-sm font-bold px-4 py-2 rounded-xl transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: city.themeColor }}
                  >
                    도전하기
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>도시 진행도</span>
          <span>
            {completedCount}/{cityMissions.length} 미션 완료
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(completedCount / cityMissions.length) * 100}%`,
              backgroundColor: city.themeColor,
            }}
          />
        </div>
        {allComplete && (
          <p className="text-center text-sm font-bold mt-2" style={{ color: city.themeColor }}>
            🎉 모든 미션을 완료했습니다!
          </p>
        )}
      </div>

      {activeMission && (
        <MissionQuiz
          mission={activeMission}
          onComplete={handleMissionComplete}
          onClose={() => setActiveMissionId(null)}
        />
      )}

      {showCelebration && (
        <CelebrationPopup
          type="city-complete"
          cityName={city.name}
          bonusExp={CITY_COMPLETE_REWARD.exp}
          bonusCoins={CITY_COMPLETE_REWARD.coins}
          onClose={() => setShowCelebration(false)}
        />
      )}

      {showLevelUp && (
        <CelebrationPopup
          type="level-up"
          newLevel={player.level}
          newTitle={getLevelTitle(player.level)}
          onClose={() => setShowLevelUp(false)}
        />
      )}
    </div>
  );
}
