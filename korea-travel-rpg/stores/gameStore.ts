import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Player } from '@/types/game';
import { cities } from '@/data/cities';
import { missions, QUIZ_REWARD, CITY_COMPLETE_REWARD } from '@/data/missions';
import { getRequiredExp, getUnlockedCityIds } from '@/utils/levelUtils';

interface GameStore {
  player: Player | null;

  createCharacter: (name: string, gender: 'male' | 'female') => void;
  completeMission: (missionId: string, cityId: string) => void;
  checkLevelUp: () => void;
  completeCity: (cityId: string) => void;
  isCityUnlocked: (cityId: string) => boolean;
  isMissionCompleted: (missionId: string) => boolean;
  resetGame: () => void;
  exportSave: () => string;
  importSave: (data: string) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      player: null,

      createCharacter: (name, gender) => {
        set({
          player: {
            name,
            gender,
            level: 1,
            exp: 0,
            coins: 0,
            completedMissions: [],
            stamps: [],
            createdAt: new Date().toISOString(),
          },
        });
      },

      completeMission: (missionId, cityId) => {
        const { player } = get();
        if (!player) return;
        if (player.completedMissions.includes(missionId)) return;

        const updatedMissions = [...player.completedMissions, missionId];
        const updatedExp = player.exp + QUIZ_REWARD.exp;
        const updatedCoins = player.coins + QUIZ_REWARD.coins;

        set({
          player: {
            ...player,
            completedMissions: updatedMissions,
            exp: updatedExp,
            coins: updatedCoins,
          },
        });

        get().checkLevelUp();

        const city = cities.find((c) => c.id === cityId);
        if (city) {
          const allCityMissions = missions.filter((m) => m.cityId === cityId);
          const completedCityMissions = allCityMissions.filter((m) =>
            get().player!.completedMissions.includes(m.id)
          );
          if (completedCityMissions.length === allCityMissions.length) {
            get().completeCity(cityId);
          }
        }
      },

      checkLevelUp: () => {
        const { player } = get();
        if (!player) return;

        let currentLevel = player.level;
        let currentExp = player.exp;

        while (currentLevel < 10) {
          const required = getRequiredExp(currentLevel);
          if (currentExp >= required) {
            currentExp -= required;
            currentLevel += 1;
          } else {
            break;
          }
        }

        if (currentLevel !== player.level || currentExp !== player.exp) {
          set({
            player: {
              ...player,
              level: currentLevel,
              exp: currentExp,
            },
          });
        }
      },

      completeCity: (cityId) => {
        const { player } = get();
        if (!player) return;
        if (player.stamps.includes(cityId)) return;

        const city = cities.find((c) => c.id === cityId);
        if (!city) return;

        set({
          player: {
            ...player,
            stamps: [...player.stamps, cityId],
            exp: player.exp + CITY_COMPLETE_REWARD.exp,
            coins: player.coins + CITY_COMPLETE_REWARD.coins,
          },
        });

        get().checkLevelUp();
      },

      isCityUnlocked: (cityId) => {
        const { player } = get();
        if (!player) return false;
        const unlockedCities = getUnlockedCityIds(player.level);
        return unlockedCities.includes(cityId);
      },

      isMissionCompleted: (missionId) => {
        const { player } = get();
        if (!player) return false;
        return player.completedMissions.includes(missionId);
      },

      resetGame: () => {
        set({ player: null });
      },

      exportSave: () => {
        const { player } = get();
        return JSON.stringify({ player, version: 1 });
      },

      importSave: (data) => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.player && parsed.player.name && parsed.player.gender) {
            set({ player: parsed.player });
          }
        } catch {
          console.error('Invalid save data');
        }
      },
    }),
    {
      name: 'korea-rpg-save',
    }
  )
);
