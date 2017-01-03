import React from 'react';
import { Button } from '../elements';

const Modal = React.createClass({
  propTypes: {
    buttons: React.PropTypes.array
  },

  render() {
    const buttons = this.props.buttons.map(button => {
      return (
        <Button
          id={ button.id }
          title={ button.title }
          onClick={ button.onClick }
        />
      );
    });
    return (
      <div className="modal">
        { this.props.children }
        { buttons }
      </div>
    );
  }
});

export default Modal;
