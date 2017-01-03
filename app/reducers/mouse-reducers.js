import { SET_MOUSE_COORDS  } from '../actions/action-types';
import { mouseActions } from '../actions';

const initialState = {
  x: 0,
  y: 0
};

export function mouseReducers(state = initialState, action) {
  switch (action.type) {
    case SET_MOUSE_COORDS:
      return Object.assign({}, state, {
        x: action.mouse.x,
        y: action.mouse.y
      });
    default:
      return state;
  }
};

export default mouseReducers;
