import { SAVE_SPRITE_DATA, SELECT_SPRITE  } from './action-types';

export const saveSpriteData = (sprite) => ({
  type: SAVE_SPRITE_DATA,
  sprite,
});

export const selectSprite = (sprite) => ({
  type: SELECT_SPRITE,
  sprite,
});

export default { saveSpriteData, selectSprite };
