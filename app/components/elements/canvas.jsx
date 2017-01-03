import React from 'react';

const CanvasElement = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      width: 8,
      height: 8
    }
  },

  render() {
    return (
      <canvas width={ this.props.width } height={ this.props.height } />
    );
  }
});

export default CanvasElement;
