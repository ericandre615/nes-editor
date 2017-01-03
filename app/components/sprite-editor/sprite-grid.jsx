import React from 'react';
import { drawGrid } from '../../lib/sprite-functions';

const SpriteGrid = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    pixel: React.PropTypes.object
  },

  componentDidMount() {
    // temp test
    const canvas = document.getElementById('sprite-grid');
    const ctx = canvas.getContext('2d');
    drawGrid(ctx, canvas, this.props.pixel);
  },

  render() {
    return (
      <canvas
        id="sprite-grid"
        width={ this.props.width }
        height={ this.props.height }
        style={{ zIndex: 100 }}
      />
    );
  }
});

export default SpriteGrid;
