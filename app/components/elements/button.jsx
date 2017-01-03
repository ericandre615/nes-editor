import React from 'react';

import './button.less';

const Button = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    classNames: React.PropTypes.string
  },

  onClick(e) {
    const btn = e.target;

    e.preventDefault();

    btn.classList.add('pressed');
    btn.setAttribute('disabled', 'disabled');
    this.props.onClick(e);
    setTimeout(() => {
      btn.removeAttribute('disabled');
      btn.classList.remove('pressed');
    }, 100);
  },

  getDefaultProps() {
    return {
      title: 'button',
      classNames: 'button',
      onClick: function(e) {
        e.preventDefault();
        console.log(`Clicked ${ e.target }`);
      }
    };
  },

  render() {
    return (
      <button className={ this.props.classNames } onClick={ this.onClick }>
        { this.props.title }
      </button>
    );
  }
});

export default Button;
