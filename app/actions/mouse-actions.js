import { SET_MOUSE_COORDS, TOGGLE_MOUSE_DOWN } from './action-types';

export const setMouseCoords = (mouse = { x: 0, y: 0 }) => ({
  type: SET_MOUSE_COORDS,
  mouse
});

export const toggleMouseDown = () => ({
  type: TOGGLE_MOUSE_DOWN
});

export default { setMouseCoords, toggleMouseDown };
