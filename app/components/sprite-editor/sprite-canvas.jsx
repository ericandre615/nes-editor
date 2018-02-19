import React from 'react';
import { drawPixel } from '../../lib/sprite-functions';
import CanvasGrid from '../canvas-grid.jsx';

const SpriteCanvas = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    pixel: React.PropTypes.object
  },

  drawPixel() {
    const { pixel, savePixelData, mouse } = this.props;

    let pixelData = drawPixel(this.ctx, mouse, pixel);
    let dataURL = this.canvas.toDataURL();

    savePixelData(pixelData, dataURL);
  },

  handleMouseDown(e) {
    e.preventDefault();

    this.drawPixel();
  },

  handleMouseMove(e) {
    const { mouse } = this.props;

    if (mouse.down) {
      this.drawPixel();
    }
  },

  componentDidMount() {
    // test only
    this.canvas = document.getElementById('sprite-canvas');
    this.ctx = this.canvas.getContext('2d');
    document.addEventListener('keypress', e => {
      if(e.keyCode == 26) {
        if(e.shiftKey) {
          // redo
          this.props.redoCanvas()
        } else {
          //undo
          this.props.undoCanvas();
        }

        let img = new Image();
        img.src = this.props.workingCanvas.dataURL;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0);
      }
    }, false);
  },

  render() {
    const { width, height, pixel, showGrid } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <canvas
          id="sprite-canvas"
          width={ this.props.width }
          height={ this.props.height }
          style={{ zIndex: "200" }}
          onMouseDown={ this.handleMouseDown }
          onMouseMove={ this.handleMouseMove }
        />
        <CanvasGrid
          id="sprite"
          showGrid={ showGrid }
          width={ width }
          height={ height }
          pixel={ pixel }
        />
      </div>
    );
  }
});

export default SpriteCanvas;
