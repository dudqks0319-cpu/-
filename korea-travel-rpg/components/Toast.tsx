"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info" | "reward";
  isVisible: boolean;
  onClose: () => void;
}

const typeStyles: Record<ToastProps["type"], string> = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-primary text-white",
  reward: "bg-gold text-white",
};

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const displayMessage = type === "reward" ? `✨ ${message}` : message;

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 shadow-lg transition-all duration-300 ${typeStyles[type]}`}
      style={{
        animation: "slideDown 0.3s ease-out",
      }}
    >
      <span className="font-medium whitespace-nowrap">{displayMessage}</span>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translate(-50%, -20px);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
