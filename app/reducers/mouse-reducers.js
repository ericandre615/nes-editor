import { SET_MOUSE_COORDS, TOGGLE_MOUSE_DOWN  } from '../actions/action-types';
import { mouseActions } from '../actions';

const initialState = {
  x: 0,
  y: 0,
  down: false
};

export function mouseReducers(state = initialState, action) {
  switch (action.type) {
    case SET_MOUSE_COORDS:
      return Object.assign({}, state, {
        x: action.mouse.x,
        y: action.mouse.y
      });
    case TOGGLE_MOUSE_DOWN:
      return Object.assign({}, state, {
        down: !state.down
      });
    default:
      return state;
  }
};

export default mouseReducers;
