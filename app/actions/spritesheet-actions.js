import { ADD_SPRITESHEET, UPDATE_SPRITESHEET  } from './action-types';

export const addSpritesheet = spritesheet => ({
  type: ADD_SPRITESHEET,
  spritesheet
});

export const updateSpritesheet = spritesheet => ({
  type: UPDATE_SPRITESHEET,
  spritesheet
});

export default { addSpritesheet, updateSpritesheet };
