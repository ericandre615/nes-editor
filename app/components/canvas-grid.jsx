import React, { Component } from 'react';
import { drawGrid } from '../lib/sprite-functions';

const defaultStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'white',
  zIndex: '100',
};

export class CanvasGrid extends Component {
  componentDidMount() {
    // temp test
    const { id, pixel, showGrid } = this.props;

    if (showGrid !== false) {
      const canvas = document.getElementById(`${id}-grid`);
      const ctx = canvas.getContext('2d');

      drawGrid(ctx, canvas, pixel);
    }
  }

  render() {
    const { showGrid, width, height, id } = this.props;

    if (showGrid === false) {
      return null;
    }

    return (
      <canvas
        className="canvas-grid"
        id={ `${id}-grid` }
        width={ width }
        height={ height }
        style={ defaultStyles }
      />
    );
  }
};

CanvasGrid.propTypes = {
  id: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  pixel: React.PropTypes.object
};

export default CanvasGrid;

