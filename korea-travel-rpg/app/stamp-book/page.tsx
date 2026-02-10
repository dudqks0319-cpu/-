"use client";

import { useState } from "react";
import Link from "next/link";
import { useGameStore } from "@/stores/gameStore";
import { cities } from "@/data/cities";
import BottomNav from "@/components/BottomNav";
import SettingsModal from "@/components/SettingsModal";

const STAMP_EMOJIS: Record<string, string> = {
  seoul: "🏯",
  incheon: "🏮",
  suwon: "🏰",
  busan: "🏖️",
  jeju: "🌴",
};

export default function StampBookPage() {
  const player = useGameStore((s) => s.player);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const stamps = player?.stamps ?? [];
  const collected = stamps.length;
  const total = cities.length;
  const allCollected = collected === total;

  return (
    <div className="min-h-screen bg-warm pb-20">
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← 지도로
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-1">📕 여행 스탬프북</h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          한국 곳곳을 여행하며 스탬프를 모아보세요!
        </p>

        {allCollected && (
          <div className="bg-gold/20 border-2 border-gold rounded-2xl p-4 text-center mb-4 animate-bounce-in">
            <span className="text-3xl">🏆</span>
            <p className="text-lg font-bold text-gold mt-1">전국일주 마스터!</p>
          </div>
        )}

        <p className="text-center text-2xl font-bold mb-6">
          🏅 {collected}/{total} 수집 완료
        </p>

        <div className="grid grid-cols-2 gap-4">
          {cities.map((city) => {
            const hasStamp = stamps.includes(city.id);
            const emoji = STAMP_EMOJIS[city.id] ?? "🏷️";

            if (hasStamp) {
              return (
                <div
                  key={city.id}
                  className="w-full aspect-square rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `${city.themeColor}20`,
                    border: `2px solid ${city.themeColor}`,
                  }}
                >
                  <span className="text-5xl mb-2">{emoji}</span>
                  <span className="font-bold text-gray-800">{city.name}</span>
                  <span
                    className="text-xs font-semibold mt-1 px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: city.themeColor }}
                  >
                    마스터!
                  </span>
                </div>
              );
            }

            return (
              <div
                key={city.id}
                className="w-full aspect-square rounded-2xl p-4 flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300"
              >
                <span className="text-5xl mb-2 opacity-30">🔒</span>
                <span className="font-bold text-gray-400">{city.name}</span>
                <span className="text-xs text-gray-400 mt-1">미발견</span>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNav activeTab="stamps" onSettingsClick={() => setSettingsOpen(true)} />
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}
