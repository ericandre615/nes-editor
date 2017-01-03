import React from 'react';
import { Pixel } from '../elements';
import { UiContainer } from '../ui-menu';

const SpritePalette = React.createClass({

  pixelClick(e) {
    if(e.target.classList.contains('sprite-pixel')) {
      let pixel = e.target;
      let color = pixel.dataset.color;
      pixel.classList.add('pressed');
      this.props.setColor(color);
      setTimeout(() => pixel.classList.remove('pressed'), 500);
    }
  },

  render() {
    return (
      <UiContainer
        id="sprite-palette"
        title="Sprite Palette"
        draggable={ true }
      >
        <div onClick={ this.pixelClick }>
        <Pixel id="sprite-red" color="rgb(255, 0, 0)" displayColor="rgb(255, 0, 0)" />
        <Pixel id="sprite-green" color="rgb(0, 255, 0)" displayColor="rgb(0, 255, 0)" />
        <Pixel id="sprite-blue" color="rgb(0, 0, 255)" displayColor="rgb(0, 0, 255)" />
        <Pixel id="sprite-bg" color="eraser" displayColor="rgb(255, 255, 255)" />
        </div>
      </UiContainer>
    );
  }
});

export default SpritePalette;
