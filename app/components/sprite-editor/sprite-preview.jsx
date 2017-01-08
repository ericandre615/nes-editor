import React from 'react';
import { UiContainer } from '../ui-menu';
import { restoreCanvas, scaleCanvas, saveCanvas, applyPalette } from '../../lib/sprite-functions';

const SpritePreview = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    pixel: React.PropTypes.object,
    dataURL: React.PropTypes.string,
    palette: React.PropTypes.object
  },

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.dataURL !== this.props.dataURL) {
      const restored = restoreCanvas(this.canvas, this.props.dataURL);
      //const pixelData = saveCanvas(this.canvas);
      const convertedPixels = applyPalette(this.canvas);

      console.log(convertedPixels);
      this.ctx.putImageData(convertedPixels, 0, 0);
    }
  },

  componentDidMount() {
    this.canvas = document.getElementById('sprite-preview');
    this.ctx = this.canvas.getContext('2d');

    const restored = restoreCanvas(this.canvas, this.props.dataURL);
    const pixelData = saveCanvas(this.canvas);
  },

  render() {
    return (
      <UiContainer
        id="sprite-preview-container"
        title="Sprite Preview"
        draggable={ true }
      >
        <div id="preview-container">
          <canvas
            id="sprite-preview"
            width={ this.props.width }
            height={ this.props.height }
            style={{ zIndex: "200", backgroundColor: 'white' }}
          />
        </div>
      </UiContainer>
    );
  }
});

export default SpritePreview;
