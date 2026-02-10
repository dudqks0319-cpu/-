import { Player } from '@/types/game';

interface SaveData {
  player: Player;
  version: number;
}

export function isValidSaveData(data: unknown): data is SaveData {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;
  if (!obj.player || typeof obj.player !== 'object') return false;

  const player = obj.player as Record<string, unknown>;
  if (typeof player.name !== 'string') return false;
  if (player.gender !== 'male' && player.gender !== 'female') return false;
  if (typeof player.level !== 'number') return false;
  if (typeof player.exp !== 'number') return false;
  if (typeof player.coins !== 'number') return false;
  if (!Array.isArray(player.completedMissions)) return false;
  if (!Array.isArray(player.stamps)) return false;

  return true;
}

export function exportGameSave(state: { player: Player | null }): void {
  if (!state.player) return;

  const saveData: SaveData = {
    player: state.player,
    version: 1,
  };

  const json = JSON.stringify(saveData, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `korea-rpg-save-${Date.now()}.json`;
  link.click();

  URL.revokeObjectURL(url);
}

export function importGameSave(jsonString: string): SaveData | null {
  try {
    const data = JSON.parse(jsonString);
    if (isValidSaveData(data)) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}
