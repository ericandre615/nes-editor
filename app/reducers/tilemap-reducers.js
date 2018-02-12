import { ADD_TILEMAP, UPDATE_TILEMAP } from '../actions/action-types';
import { tilemapActions } from '../actions';


const rows = Array(30).fill(null);
const grid = rows.map(() => Array(32).fill(null));

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
