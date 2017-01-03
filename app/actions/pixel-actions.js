import { SET_PIXEL_COLOR, SET_PIXEL_SCALE, SET_PIXEL_SIZE } from './action-types';

export function setColor(color) {
  return {
    type: SET_PIXEL_COLOR,
    color
  };
};

export function setSize(width, height) {
  return {
    type: SET_PIXEL_SIZE,
    width,
    height
  };
};

export function setScale(scale) {
  return {
    type: SET_PIXEL_SCALE,
    scale
  };
};

export default { setSize, setColor, setScale };
