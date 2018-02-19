import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dialog from '../dialog.jsx';
import Overlay from '../dialog-overlay.jsx';

const defaultProps = {
  buttons: [{
    text: 'Okay',
    type: 'confirm',
    handleButton(e) {
      return e;
    }
  }],
  message: 'test dialog message',
  id: 'dialog-id',
  type: 'confirm',
};

describe('Dialog Snapshots', () => {
  it('it shouldmatch default snaphshot', () => {
    const shallowDialog = shallow(<Dialog dialog={ defaultProps } />);

    expect(toJson(shallowDialog)).toMatchSnapshot();
  });
});
