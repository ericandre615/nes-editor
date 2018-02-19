import { ADD_TILEMAP, UPDATE_TILEMAP } from '../actions/action-types';
import { tilemapActions } from '../actions';
import { createDataGrid } from '../lib/utils';

const grid = createDataGrid(32, 30);

export const initialTilemap = {
  name: 'default',
  data: grid
};

export const initialState = {
  default: initialTilemap
};

export const tilemapReducers = (state = initialState, action) => {
  const { tilemap = {} } = action;
  const { name, data } = tilemap;
  switch (action.type) {
    case ADD_TILEMAP:
      return Object.assign({}, state, {
        [name]: { data }
      });
    case UPDATE_TILEMAP:
      return Object.assign({}, state, {
        [name]: { data }
      })
    default:
      return state;
  }
};

export default tilemapReducers;
