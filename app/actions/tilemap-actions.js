import { ADD_TILEMAP, UPDATE_TILEMAP  } from './action-types';

export const addTilemap = tilemap => ({
  type: ADD_TILEMAP,
  tilemap
});

export const updateTilemap = tilemap => ({
  type: UPDATE_TILEMAP,
  tilemap
});

export default { addTilemap, updateTilemap };
