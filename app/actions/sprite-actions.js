import { SAVE_SPRITE_DATA  } from './action-types';

export function saveSpriteData(sprite) {
  return {
    type: SAVE_SPRITE_DATA,
    sprite
  };
};

export default { saveSpriteData };
