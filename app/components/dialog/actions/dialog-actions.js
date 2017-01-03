'use strict';

import { CREATE_DIALOG, REMOVE_DIALOG, HIDE_DIALOG, SHOW_DIALOG, TOGGLE_DIALOG } from './actionTypes';

export function createDialog(dialog = {
  id: `dialog-${Math.floor(Math.random(200))}`,
  showDialog: false,
  type: 'confirm',
  message: '',
  buttons: [{
    type: 'confirm',
    text: 'Confirm',
    handleButton(e) {
      return this;
    }
  }]
}) {
  return {
    type: CREATE_DIALOG,
    dialog
  };
};

export function removeDialog(dialog_id) {
  return {
    type: REMOVE_DIALOG,
    dialog: {
      id: dialog_id
    }
  };
};

export function showDialog(dialog_id) {
  return {
    type: SHOW_DIALOG,
    dialog: {
      id: dialog_id
    }
  };
}

export function hideDialog(dialog_id) {
  return {
    type: HIDE_DIALOG,
    dialog: {
      id: dialog_id
    }
  };
}

export function toggleDialog(dialog_id) {
  return {
    type: TOGGLE_DIALOG,
    dialog: {
      id: dialog_id
    }
  };
}

export default {
  createDialog,
  removeDialog,
  hideDialog,
  showDialog,
  toggleDialog
};
