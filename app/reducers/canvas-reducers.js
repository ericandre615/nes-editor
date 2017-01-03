import undoable, { distinctState } from 'redux-undo';
import { SAVE_PIXEL_DATA } from '../actions/action-types';
import { canvasActions } from '../actions';

const initialState = {
  dataURL: '',
  pixels: [
    {
      x: 0,
      y: 0,
      pixelWidth: 8,
      pixelHeight: 8,
      color: ''
    }
  ]
};

const canvasReducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PIXEL_DATA:
      return Object.assign({}, state, {
        dataURL: action.dataURL,
        pixels: [...state.pixels, action.pixel]

      });
    default:
      return state;
  }
};

const undoableCanvas = undoable(canvasReducers, {
  filter: distinctState()
});

export default undoableCanvas;
