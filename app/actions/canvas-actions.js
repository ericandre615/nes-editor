import { SAVE_PIXEL_DATA } from './action-types';

export function savePixelData(pixel, dataURL) {
  return {
    type: SAVE_PIXEL_DATA,
    pixel,
    dataURL
  };
};

export default { savePixelData };
