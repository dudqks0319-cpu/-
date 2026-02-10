"use client";

import Link from "next/link";

interface BottomNavProps {
  activeTab: "map" | "stamps" | "settings";
  onSettingsClick?: () => void;
}

export default function BottomNav({ activeTab, onSettingsClick }: BottomNavProps) {
  const tabBase = "flex flex-col items-center justify-center gap-0.5";
  const activeClass = "text-primary font-bold";
  const inactiveClass = "text-gray-400";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div
        className="flex justify-around items-center h-16"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Link href="/" className={`${tabBase} ${activeTab === "map" ? activeClass : inactiveClass}`}>
          <span className="text-xl">🗺️</span>
          <span className="text-xs">지도</span>
        </Link>

        <Link
          href="/stamp-book"
          className={`${tabBase} ${activeTab === "stamps" ? activeClass : inactiveClass}`}
        >
          <span className="text-xl">📕</span>
          <span className="text-xs">스탬프</span>
        </Link>

        <button
          onClick={onSettingsClick}
          className={`${tabBase} ${activeTab === "settings" ? activeClass : inactiveClass}`}
        >
          <span className="text-xl">⚙️</span>
          <span className="text-xs">설정</span>
        </button>
      </div>
    </nav>
  );
}
