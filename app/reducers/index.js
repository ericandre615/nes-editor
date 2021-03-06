import pixelReducers from './pixel-reducers';
import undoableCanvas from './canvas-reducers';
import mouseReducers from './mouse-reducers';
import spriteReducers from './sprite-reducers';
import paletteReducers from './palette-reducers';

export default {
  pixel: pixelReducers,
  workingCanvas: undoableCanvas,
  mouse: mouseReducers,
  sprite: spriteReducers,
  palettes: paletteReducers
};
