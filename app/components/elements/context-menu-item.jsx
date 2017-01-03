import React from 'react';

const ContextMenuItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render() {
    return (
      <li className="contet-menu-item" onClick={ this.props.onSelect }> { this.props.title } </li>
    );
  }
});

export default ContextMenuItem;
