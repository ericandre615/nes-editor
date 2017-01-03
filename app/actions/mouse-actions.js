import { SET_MOUSE_COORDS } from './action-types';

export function setMouseCoords(mouse = { x: 0, y: 0 }) {
  return {
    type: SET_MOUSE_COORDS,
    mouse
  };
};

export default { setMouseCoords };
