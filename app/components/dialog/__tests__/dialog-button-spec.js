import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DialogButton from '../dialog-button.jsx';

describe('Dialog Buttons Snapshots', () => {
  it('Should match default snapshot', () => {
    const shallowDialogButton = shallow(<DialogButton />);

    expect(toJson(shallowDialogButton)).toMatchSnapshot();
  });
});
