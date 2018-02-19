import React, { Component } from 'react';
import { tile } from '../../../config';
import CanvasGrid from '../canvas-grid.jsx';
import { snapToGrid } from '../../lib/sprite-functions.js';

// each sheet is 16 x 16 (tiles) sprites (8 x 8 pixels)

const [tileSizeX, tileSizeY ] = tile.tileSize;

const flatten = arr => arr.reduce((acc, curr) => acc.concat(
  (Array.isArray(curr)) ? flatten(curr) : curr
), []);

const drawSpritesheet = canvas => (tilemap, tile) => {
  const { width: canvasWidth, height: canvasHeight, ctx } = canvas;
  const { width: tileWidth, height: tileHeight, scale } = tile;
  const width = tileWidth * scale;
  const height = tileHeight * scale;
  const canvasCtx = ctx || canvas.getContext('2d');
  const flatTilemap = flatten(tilemap);

  canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);

  flatTilemap.forEach(tile => {
    if (!tile) { return null; }

    const { x, y, sprite } = tile;
    const img = new Image();

    img.src = tile.sprite.dataURL || '';

    canvasCtx.drawImage(img, x, y, width, height);
  });
}

export class SpritesheetCanvas extends Component {
  constructor(props) {
    super(props);

    this.columns = 16;
    this.rows = 16;
    this.tileSizeX = tileSizeX;
    this.tileSizeY = tileSizeY;
    this.scale = props.scale || 1;
    this.width = this.columns * this.tileSizeX * this.scale;
    this.height = this.rows * this.tileSizeY * this.scale;

    this.drawSprite = this.drawSprite.bind(this);
  }

  componentDidMount() {
    // test only
    this.canvas = document.getElementById('spritesheet-canvas');
    this.ctx = this.canvas.getContext('2d');
    // document.addEventListener('keypress', e => {
    //   if(e.keyCode == 26) {
    //     if(e.shiftKey) {
    //       // redo
    //       this.props.redoCanvas()
    //     } else {
    //       //undo
    //       this.props.undoCanvas();
    //     }
    //
    //     let img = new Image();
    //     img.src = this.props.selectedSprite.dataURL || '';
    //     console.log('SelectedSprite IMAGE ', img);
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //     this.ctx.drawImage(img, 0, 0);
    //   }
    // }, false);
  }

  drawSprite(e) {
    e.preventDefault();

    const { selectedSprite, tilemap, updateTilemap } = this.props;
    const mouse = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    };
    const scaled = {
      width: this.tileSizeX * this.scale,
      height: this.tileSizeY * this.scale
    }
    const { x: snapX, y: snapY } = snapToGrid(mouse, { width: scaled.width, height: scaled.height });
    const tileIndex = {
      x: Math.floor(snapX / scaled.width),
      y: Math.floor(snapY / scaled.height)
    }

    const tilemapData = tilemap.data.slice();

    tilemapData[tileIndex.y][tileIndex.x] = {
      x: snapX,
      y: snapY,
      sprite: selectedSprite
    };
    const updatedTilemap = {
      name: 'default',
      data: tilemapData,
    }

    updateTilemap(updatedTilemap);

    drawTilemap(this.canvas)(updatedTilemap.data, {
      width: this.tileSizeX,
      height: this.tileSizeY,
      scale: this.scale
    });
  }

  render() {
    const { width, height, showGrid } = this.props;
    const styles = { position: 'absolute' };
    return (
      <div style={ styles }>
        <canvas
          id="spritesheet-canvas"
          width={ this.width }
          height={ this.height }
          style={{ zIndex: '201', position: 'absolute' }}
          onMouseDown={ this.drawSprite }
        />
        <CanvasGrid
          id="spritesheet"
          showGrid={ showGrid }
          width={ this.width }
          height={ this.height }
          pixel={{
            width: this.tileSizeX,
            height: this.tileSizeY,
            scale: this.scale,
          }}
        />
      </div>
    );
  }
};

SpritesheetCanvas.defaultProps = {
  showGrid: true,
};

export default SpritesheetCanvas;
