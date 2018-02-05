import React, { Component } from 'react';
import { tile } from '../../../config';
import CanvasGrid from '../canvas-grid.jsx';

const [tileSizeX, tileSizeY ] = tile.tileSize;

const drawTileImage = canvas => tile => {
  const { width: canvasWidth, height: canvasHeight, ctx } = canvas;
  const { dataURL, width: tileWidth, height: tileHeight, scale } = tile;
  const width = tileWidth * scale;
  const height = tileHeight * scale;
  const canvasCtx = ctx || canvas.getContext('2d');
  
  console.log('canvas tile w ', width, ' - ', height);
  console.log('CANVASCTX ', canvasCtx);
  const img = new Image();
  img.src = dataURL || '';
  console.log('DrawTileIMAGE ', img);
  canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
  canvasCtx.drawImage(img, 0, 0, width, height);
};

export class TilemapCanvas extends Component {
  constructor(props) {
    super(props);

    this.columns = 32;
    this.rows = 30;
    this.tileSizeX = tileSizeX;
    this.tileSizeY = tileSizeY;
    this.scale = props.scale || 1;
    this.width = this.columns * this.tileSizeX * this.scale;
    this.height = this.rows * this.tileSizeY * this.scale;

    this.drawTile = this.drawTile.bind(this);
  }

  componentDidMount() {
    // test only
    this.canvas = document.getElementById('tilemap-canvas');
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
        img.src = this.props.selectedSprite.dataURL || '';
        console.log('SelectedSprite IMAGE ', img);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0);
      }
    }, false);
  }

  drawTile(e) {
    e.preventDefault();
    const { selectedSprite } = this.props;
    console.log('DrawTile ', selectedSprite);

    drawTileImage(this.canvas)({
      dataURL: selectedSprite.dataURL,
      width: 16,
      height: 16,
      scale: 2,
    });
  }

  render() {
    const { width, height, showGrid } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <CanvasGrid
          id="tilemap"
          showGrid={ showGrid }
          width={ this.width }
          height={ this.height }
          pixel={{
            width: this.tileSizeX * 2,
            height: this.tileSizeY * 2,
            scale: this.scale,
          }}
        />
        <canvas
          id="tilemap-canvas"
          width={ this.width }
          height={ this.height }
          style={{ zIndex: '201', position: 'absolute' }}
          onMouseDown={ this.drawTile }
        />
      </div>
    );
  }
};

TilemapCanvas.defaultProps = {
  showGrid: true,
};

export default TilemapCanvas;

