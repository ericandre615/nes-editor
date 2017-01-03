import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Dialog from '../dialog.jsx';
import Overlay from '../dialog-overlay.jsx';

const shallowRenderer = TestUtils.createRenderer();
let component;

describe('Dialog', () => { 
  beforeEach(() => {
    let dialog = {
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

    shallowRenderer.render(<Dialog dialog={dialog} />);
    component = shallowRenderer.getRenderOutput(); 
  }); 
  
  it('is a ReactElement', ()=> {
    expect(TestUtils.isElement(component)).toBe(true);
  });
  
  it('it should render with props', () => {
    let expected = (
      <div>
        <Overlay />
        <div className="dialog">
          <p className="dialog-message">test dialog message</p>
          <div className="dialog-buttons">
            <dialog-button 
              handleButton={function noRefCheck() {}}
              text="Okay"
              type="confirm"
            />
          </div>
        </div>
      </div>
    );
    
    expect(component).toEqualJSX(expected);
  });
});
