import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import DialogButton from '../dialog-button.jsx';

const shallowRenderer = TestUtils.createRenderer();
let component;

describe('Dialog Button', () => {
  beforeEach(() => {
    shallowRenderer.render(<DialogButton />);
    component = shallowRenderer.getRenderOutput();
  });

  it('Should be a ReactElement', () => {
    expect(TestUtils.isElement(component)).toBe(true);
  });
});
