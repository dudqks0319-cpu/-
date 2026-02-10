export interface MapPosition {
  x: number;
  y: number;
}

export interface City {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  requiredLevel: number;
  missions: string[];
  stamp: string;
  mapPosition: MapPosition;
  themeColor: string;
}

export interface Mission {
  id: string;
  cityId: string;
  name: string;
  type: 'quiz';
  landmark: string;
  description: string;
}

export interface QuizMission extends Mission {
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
}

export interface Player {
  name: string;
  gender: 'male' | 'female';
  level: number;
  exp: number;
  coins: number;
  completedMissions: string[];
  stamps: string[];
  createdAt: string;
}

export interface LevelConfig {
  level: number;
  title: string;
  requiredExp: number;
  unlockedCities: string[];
}

export interface GameState {
  player: Player | null;
  currentCityId: string | null;
  currentMissionId: string | null;
  isPlaying: boolean;
}
