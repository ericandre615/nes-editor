import { SET_PIXEL_COLOR, SET_PIXEL_SCALE, SET_PIXEL_SIZE } from '../actions/action-types';
import { pixelActions } from '../actions';
import { pixel } from '../../config';

const initialState = pixel;

export function pixelReducers(state = initialState, action) {
  switch (action.type) {
    case SET_PIXEL_COLOR:
      return Object.assign({}, state, {
        color: action.color
      });
    case SET_PIXEL_SCALE:
      return Object.assign({}, state, {
        scale: action.scale
      });
    case SET_PIXEL_SIZE:
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      });
    default:
      return state;
  }
};

export default pixelReducers;

