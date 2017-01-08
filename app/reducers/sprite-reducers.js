import { SAVE_SPRITE_DATA } from '../actions/action-types';
import { spriteActions } from '../actions';
import { pixel } from '../../config';

const initialState = {
  id: 123,
  name: 'sprite1',
  palette: 1,
  data: {
    canvas: 'data-url',
    planar: [],
    pixel
  }
};

export function spriteReducers(state = initialState, action) {
  switch (action.type) {
    case SAVE_SPRITE_DATA:
      return Object.assign({}, state, action.sprite);
    default:
      return state;
  }
};

export default spriteReducers;
