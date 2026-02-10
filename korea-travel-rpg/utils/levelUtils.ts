import { levelConfigs } from '@/data/levelConfig';

export function getRequiredExp(level: number): number {
  return level * 30;
}

export function getLevelTitle(level: number): string {
  const config = levelConfigs.find((c) => c.level === level);
  return config?.title ?? '초보 여행자 🎒';
}

export function getUnlockedCityIds(level: number): string[] {
  const config = levelConfigs.find((c) => c.level === level);
  if (!config) {
    if (level >= 10) {
      return levelConfigs[levelConfigs.length - 1].unlockedCities;
    }
    return levelConfigs[0].unlockedCities;
  }
  return config.unlockedCities;
}

export function getExpPercentage(exp: number, level: number): number {
  const required = getRequiredExp(level);
  if (required === 0) return 100;
  return Math.min(Math.round((exp / required) * 100), 100);
}
