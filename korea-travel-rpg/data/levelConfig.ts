import { LevelConfig } from '@/types/game';

const BASE_CITIES = ['seoul', 'incheon', 'suwon'];
const MID_CITIES = [...BASE_CITIES, 'busan'];
const ALL_CITIES = [...MID_CITIES, 'jeju'];

export const levelConfigs: LevelConfig[] = [
  { level: 1, title: '초보 여행자 🎒', requiredExp: 30, unlockedCities: BASE_CITIES },
  { level: 2, title: '초보 여행자 🎒', requiredExp: 60, unlockedCities: BASE_CITIES },
  { level: 3, title: '초보 여행자 🎒', requiredExp: 90, unlockedCities: BASE_CITIES },
  { level: 4, title: '중급 탐험가 🧳', requiredExp: 120, unlockedCities: MID_CITIES },
  { level: 5, title: '중급 탐험가 🧳', requiredExp: 150, unlockedCities: MID_CITIES },
  { level: 6, title: '중급 탐험가 🧳', requiredExp: 180, unlockedCities: MID_CITIES },
  { level: 7, title: '전국일주 도전자 ✈️', requiredExp: 210, unlockedCities: ALL_CITIES },
  { level: 8, title: '전국일주 도전자 ✈️', requiredExp: 240, unlockedCities: ALL_CITIES },
  { level: 9, title: '전국일주 도전자 ✈️', requiredExp: 270, unlockedCities: ALL_CITIES },
  { level: 10, title: '전국일주 도전자 ✈️', requiredExp: 300, unlockedCities: ALL_CITIES },
];
