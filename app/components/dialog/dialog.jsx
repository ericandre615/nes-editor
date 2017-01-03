import React from 'react';
import Button from './dialog-button.jsx';
import Overlay from './dialog-overlay.jsx';

import './dialog.less';

export default React.createClass({
  propTypes: {
    dialog: React.PropTypes.object.isRequired
  },

  getDefaultProps() {
    return {
      dialog: {
        id: 'default-dialog',
        message: 'You have been dialogged',
        type: 'confirm',
        showDialog: false,
        buttons: [
          {
            type: 'confirm',
            text: 'Confirm',
            handleButton(e) {
              return console.log('dismiss dialog');
            }
          }
        ]
      }
    }
  },

  render() {
    let buttons = this.props.dialog.buttons.map((button, index) => {
      return <Button handleButton={button.handleButton.bind(this, index) } type={button.type} text={button.text} key={index} />;
    });
    return (
      <div>
        <Overlay />
        <div className="dialog">
          <p className="dialog-message">{this.props.dialog.message}</p>
          <div className="dialog-buttons">
          { buttons }
          </div>
        </div>
      </div>
    );
  }
});
