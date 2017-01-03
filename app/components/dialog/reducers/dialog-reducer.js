import * as actions from '../actions/actionTypes';
import dialogActions from '../actions/dialog-actions';

const initialState = [
    {
      id: 'other-dialog',
      message: 'needs to stay unchanged',
      type: 'confirm-deny',
      button: []
    }
  ];

export function dialogReducers(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_DIALOG:
      return [...state, action.dialog];
    case actions.REMOVE_DIALOG:
      return state.filter((dialog, i) => {
        if (dialog.id !== action.dialog.id) {
          return dialog
        }
      });
    case actions.HIDE_DIALOG:
      return state.map((dialog, i) => {
        if(dialog.id === action.dialog.id) {
          dialog.showDialog = false;
        }
        return dialog;
      });
    case actions.SHOW_DIALOG:
      return state.map((dialog, i) => {
        if(dialog.id === action.dialog.id) {
          dialog.showDialog = true;
        }
        return dialog;
      });
    case actions.TOGGLE_DIALOG:
      return state.map((dialog, i) => {
        if(dialog.id === action.dialog.id) {
          dialog.showDialog = !dialog.showDialog;
        }
        return dialog;
      });
    default:
      return state;
  }
};

export default dialogReducers;

