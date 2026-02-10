"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/stores/gameStore";

export default function CharacterPage() {
  const router = useRouter();
  const { player, createCharacter } = useGameStore();
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (player) {
      router.replace("/");
    }
  }, [player, router]);

  const handleStart = () => {
    if (!selectedGender || !name.trim()) return;
    createCharacter(name.trim(), selectedGender);
    router.push("/");
  };

  if (player) return null;

  return (
    <div className="min-h-screen bg-warm flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-2">
        🇰🇷 한국 여행 RPG
      </h1>
      <p className="text-gray-600 mb-8">여행자님, 캐릭터를 선택해주세요!</p>

      <div className="flex gap-6 mb-8">
        <button
          onClick={() => setSelectedGender("male")}
          className={`flex flex-col items-center transition-all duration-300 ${
            selectedGender === "male"
              ? "ring-4 ring-primary scale-105 rounded-2xl"
              : selectedGender === "female"
              ? "opacity-60"
              : ""
          }`}
        >
          <div className="w-36 h-36 rounded-full bg-blue-100 flex items-center justify-center mb-3 overflow-hidden">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="42" r="22" fill="#FBBF24" />
              <rect x="38" y="24" width="44" height="14" rx="7" fill="#3B82F6" />
              <rect x="48" y="18" width="24" height="10" rx="3" fill="#3B82F6" />
              <circle cx="52" cy="44" r="2.5" fill="#1E293B" />
              <circle cx="68" cy="44" r="2.5" fill="#1E293B" />
              <path d="M55 52 Q60 57 65 52" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
              <rect x="46" y="64" width="28" height="32" rx="4" fill="#60A5FA" />
              <rect x="42" y="68" width="10" height="6" rx="3" fill="#60A5FA" />
              <rect x="68" y="68" width="10" height="6" rx="3" fill="#60A5FA" />
              <rect x="46" y="96" width="12" height="14" rx="3" fill="#1E40AF" />
              <rect x="62" y="96" width="12" height="14" rx="3" fill="#1E40AF" />
              <rect x="34" y="66" width="16" height="22" rx="8" fill="#3B82F6" />
              <rect x="30" y="62" width="24" height="4" rx="2" fill="#3B82F6" />
            </svg>
          </div>
          <span className="font-bold text-gray-700">남자 여행자</span>
        </button>

        <button
          onClick={() => setSelectedGender("female")}
          className={`flex flex-col items-center transition-all duration-300 ${
            selectedGender === "female"
              ? "ring-4 ring-primary scale-105 rounded-2xl"
              : selectedGender === "male"
              ? "opacity-60"
              : ""
          }`}
        >
          <div className="w-36 h-36 rounded-full bg-pink-100 flex items-center justify-center mb-3 overflow-hidden">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <path d="M38 48 Q38 28 60 28 Q82 28 82 48" fill="#92400E" />
              <circle cx="60" cy="42" r="22" fill="#FBBF24" />
              <path d="M36 42 Q36 48 40 52" stroke="#92400E" strokeWidth="4" fill="none" />
              <path d="M84 42 Q84 48 80 52" stroke="#92400E" strokeWidth="4" fill="none" />
              <rect x="38" y="24" width="44" height="14" rx="7" fill="#EF4444" />
              <rect x="48" y="18" width="24" height="10" rx="3" fill="#EF4444" />
              <circle cx="52" cy="44" r="2.5" fill="#1E293B" />
              <circle cx="68" cy="44" r="2.5" fill="#1E293B" />
              <path d="M55 52 Q60 57 65 52" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="52" cy="50" r="3" fill="#FCA5A5" opacity="0.5" />
              <circle cx="68" cy="50" r="3" fill="#FCA5A5" opacity="0.5" />
              <rect x="46" y="64" width="28" height="32" rx="4" fill="#FB923C" />
              <rect x="42" y="68" width="10" height="6" rx="3" fill="#FB923C" />
              <rect x="68" y="68" width="10" height="6" rx="3" fill="#FB923C" />
              <rect x="46" y="96" width="12" height="14" rx="3" fill="#1E40AF" />
              <rect x="62" y="96" width="12" height="14" rx="3" fill="#1E40AF" />
              <rect x="34" y="66" width="16" height="22" rx="8" fill="#EF4444" />
              <rect x="30" y="62" width="24" height="4" rx="2" fill="#EF4444" />
            </svg>
          </div>
          <span className="font-bold text-gray-700">여자 여행자</span>
        </button>
      </div>

      <input
        type="text"
        placeholder="여행자 이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-xl p-3 w-full max-w-xs text-center mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
        maxLength={10}
      />

      <button
        onClick={handleStart}
        disabled={!selectedGender || !name.trim()}
        className={`bg-primary text-white rounded-full px-8 py-3 text-lg font-bold transition-all ${
          !selectedGender || !name.trim()
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-700 active:scale-95"
        }`}
      >
        여행 시작!
      </button>
    </div>
  );
}
