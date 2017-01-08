import { SAVE_PALETTE_DATA  } from './action-types';

export function savePaletteData(id, palette) {
  return {
    type: SAVE_PALETTE_DATA,
    id,
    palette
  };
};

export default { savePaletteData };
