"use client";

interface CelebrationPopupProps {
  type: "city-complete" | "level-up";
  cityName?: string;
  newLevel?: number;
  newTitle?: string;
  bonusExp?: number;
  bonusCoins?: number;
  onClose: () => void;
}

const confettiColors = ["#EF4444", "#3B82F6", "#F59E0B", "#10B981", "#8B5CF6"];

export default function CelebrationPopup({
  type,
  cityName,
  newLevel,
  newTitle,
  bonusExp,
  bonusCoins,
  onClose,
}: CelebrationPopupProps) {
  return (
    <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative">
        {confettiColors.map((color, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${20 + i * 30}px`,
              top: `-${10 + i * 15}px`,
              width: "12px",
              height: "12px",
              backgroundColor: color,
              borderRadius: i % 2 === 0 ? "50%" : "2px",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}

        <div className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full text-center animate-bounce-in">
          {type === "city-complete" && (
            <>
              <p className="text-4xl mb-3">🎉</p>
              <h2 className="text-2xl font-bold mb-2">축하합니다!</h2>
              <p className="text-xl font-bold text-primary mb-3">
                {cityName} 마스터!
              </p>
              <p className="text-lg mb-1">🏅 {cityName} 스탬프 획득!</p>
              <p className="text-sm text-gray-600 mb-6">
                보너스: EXP +{bonusExp ?? 50}, 코인 +{bonusCoins ?? 30}
              </p>
            </>
          )}

          {type === "level-up" && (
            <>
              <p className="text-4xl mb-3">🆙</p>
              <h2 className="text-2xl font-bold mb-2">레벨 업!</h2>
              <p className="text-xl font-bold text-primary mb-3">
                Lv.{newLevel} {newTitle}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                새로운 도시가 해금되었습니다!
              </p>
            </>
          )}

          <button
            onClick={onClose}
            className="w-full bg-primary text-white rounded-xl py-3 font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
