import { ADD_SPRITESHEET, UPDATE_SPRITESHEET } from '../actions/action-types';
import { spritesheetActions } from '../actions';
import { createDataGrid } from '../lib/utils';

const grid = createDataGrid(16, 16);

export const initialSpritesheet = {
  name: 'default',
  data: [...(new Set(grid))],
};

export const initialState = {
  default: initialSpritesheet
};

export const spritesheetReducers = (state = initialState, action) => {
  const { tilemap = {} } = action;
  const { name, data } = tilemap;
  switch (action.type) {
    case ADD_SPRITESHEET:
      return Object.assign({}, state, {
        [name]: { data }
      });
    case UPDATE_SPRITESHEET:
      return Object.assign({}, state, {
        [name]: {
          data: [...new Set(data)]
        }
      })
    default:
      return state;
  }
};

export default spritesheetReducers;
