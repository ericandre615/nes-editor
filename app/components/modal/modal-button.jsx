import React from 'react';

const ModalButton = React.createClass({
  getDefaultProps() {
    return {
      id: 'modal-container',
      text: 'Confirm',
      onClick(e) {
        e.preventDefault()
      }
    };
  },

  render() {
    return (
      <button
        className="modal-button"
        id={ this.props.id }
        onClick={ this.props.onClick }
      >
        { this.props.text }
      </button>
    );
  }
});

export default ModalButton;
