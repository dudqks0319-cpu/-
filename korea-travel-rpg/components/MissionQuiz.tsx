"use client";

import { useState } from "react";

interface MissionQuizProps {
  mission: {
    id: string;
    cityId: string;
    name: string;
    landmark: string;
    question: string;
    options: string[];
    correctAnswer: number;
    hint: string;
  };
  onComplete: () => void;
  onClose: () => void;
}

export default function MissionQuiz({ mission, onComplete, onClose }: MissionQuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsCorrect(index === mission.correctAnswer);
    setIsAnswered(true);
  };

  const handleConfirm = () => {
    onComplete();
  };

  const getOptionStyle = (index: number) => {
    if (!isAnswered) {
      return "bg-gray-100 hover:bg-gray-200";
    }
    if (index === mission.correctAnswer) {
      return "bg-green-100 border-2 border-green-500";
    }
    if (index === selectedAnswer && !isCorrect) {
      return "bg-red-100 border-2 border-red-500";
    }
    return "bg-gray-100 opacity-50";
  };

  return (
    <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 mx-4 max-w-md w-full animate-bounce-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{mission.landmark}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <p className="text-lg font-bold mb-6">{mission.question}</p>

        <div className="space-y-3 mb-6">
          {mission.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={isAnswered}
              className={`rounded-xl p-4 w-full text-left transition-all ${getOptionStyle(index)} ${
                !isAnswered ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{option}</span>
                {isAnswered && index === mission.correctAnswer && (
                  <span>✅</span>
                )}
                {isAnswered && index === selectedAnswer && !isCorrect && index !== mission.correctAnswer && (
                  <span>❌</span>
                )}
              </span>
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="mb-4 animate-slide-up">
            {isCorrect ? (
              <div className="text-center">
                <p className="text-xl font-bold text-green-600 mb-1">
                  🎉 정답이에요!
                </p>
                <p className="text-sm text-gray-600">
                  EXP +10, 코인 +5 획득!
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-xl font-bold text-red-500 mb-1">
                  😅 아쉬워요!
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  정답은 <strong>{mission.options[mission.correctAnswer]}</strong>이에요
                </p>
                <p className="text-xs text-gray-500">
                  힌트: {mission.hint}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  EXP +10, 코인 +5 획득!
                </p>
              </div>
            )}
          </div>
        )}

        {isAnswered && (
          <button
            onClick={handleConfirm}
            className="w-full bg-primary text-white rounded-xl py-3 font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all"
          >
            확인
          </button>
        )}
      </div>
    </div>
  );
}
