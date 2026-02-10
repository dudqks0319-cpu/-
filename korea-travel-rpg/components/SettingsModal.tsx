"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/stores/gameStore";
import Toast from "./Toast";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const player = useGameStore((s) => s.player);
  const resetGame = useGameStore((s) => s.resetGame);
  const importSave = useGameStore((s) => s.importSave);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info" | "reward";
    isVisible: boolean;
  }>({ message: "", type: "info", isVisible: false });

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" | "reward") => {
      setToast({ message, type, isVisible: true });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const exportSaveFile = () => {
    const state = useGameStore.getState();
    const saveData = {
      version: 1,
      timestamp: new Date().toISOString(),
      player: state.player,
    };
    const blob = new Blob([JSON.stringify(saveData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `korea-rpg-save-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("세이브 파일을 저장했습니다!", "success");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const raw = event.target?.result as string;
        const data = JSON.parse(raw);
        if (data.version && data.player) {
          importSave(JSON.stringify(data));
          showToast("불러오기 성공!", "success");
        } else {
          showToast("잘못된 파일입니다", "error");
        }
      } catch {
        showToast("잘못된 파일입니다", "error");
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleReset = () => {
    if (confirm("정말 초기화하시겠습니까? 모든 진행이 삭제됩니다.")) {
      resetGame();
      onClose();
      router.push("/character");
    }
  };

  if (!isOpen) return null;

  const createdDate = player?.createdAt
    ? new Date(player.createdAt).toLocaleDateString("ko-KR")
    : "-";

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />

        <div className="relative bg-white rounded-2xl w-[90%] max-w-sm p-6 shadow-xl animate-bounce-in">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>

          <h2 className="text-xl font-bold mb-4">⚙️ 설정</h2>

          {player && (
            <div className="mb-4 space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-semibold">이름:</span> {player.name}
              </p>
              <p>
                <span className="font-semibold">레벨:</span> Lv.{player.level}
              </p>
              <p>
                <span className="font-semibold">플레이 시작일:</span> {createdDate}
              </p>
            </div>
          )}

          <hr className="my-4 border-gray-200" />

          <div className="space-y-3">
            <button
              onClick={exportSaveFile}
              className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              💾 세이브 파일 내보내기
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
            >
              📂 세이브 파일 가져오기
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </div>

          <hr className="my-4 border-gray-200" />

          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl bg-red-100 text-red-600 font-semibold hover:bg-red-200 transition-colors"
          >
            🔄 게임 초기화
          </button>
        </div>
      </div>
    </>
  );
}
