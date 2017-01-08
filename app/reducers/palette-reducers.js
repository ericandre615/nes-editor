import { SAVE_PALETTE_DATA } from '../actions/action-types';
import { paletteActions } from '../actions';
import { palettes } from '../../config';

const initialState = palettes;

export function paletteReducers(state = initialState, action) {
  switch (action.type) {
    case SAVE_PALETTE_DATA:
      return state.map((palette, i) => {
        if(i === action.id) {
          return action.palette;
        }

        return palette;
      });
    default:
      return state;
  }
};

export default paletteReducers;
