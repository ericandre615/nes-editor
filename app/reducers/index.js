import pixelReducers from './pixel-reducers';
import undoableCanvas from './canvas-reducers';
import mouseReducers from './mouse-reducers';

export default {
  pixel: pixelReducers,
  workingCanvas: undoableCanvas,
  mouse: mouseReducers
};
