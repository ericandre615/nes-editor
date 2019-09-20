import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import SpriteCanvas from './sprite-canvas.jsx';
import SpriteGrid from './sprite-grid.jsx';
import SpriteTools from './sprite-tools.jsx';
import SpritePalette from './sprite-palette.jsx';
import SpritePreview from './sprite-preview.jsx';
import { UiMenuButton } from '../ui-menu';
import { ContextMenu } from '../elements';
import { Modal } from '../modal';
import { setColor, setSize, setScale } from '../../actions/pixel-actions';
import { savePixelData, undoCanvas, redoCanvas } from '../../actions/canvas-actions';
import { saveSpriteData } from '../../actions/sprite-actions';
import { savePaletteData } from '../../actions/palette-actions';
import { setMouseCoords } from '../../actions/mouse-actions';
import contextMenuItems from './sprite-context-menu';

import './sprite-editor.less';

const canvasOptions = { width: 8, height: 8};

const SpriteEditor = React.createClass({
  getInitialState() {
    return {
      showContextMenu: false,
      showSpriteAttrs: false
    }
  },

  openContextMenu() {
    this.setState({ showContextMenu: true });
  },

  closeContextMenu() {
    this.setState({ showContextMenu: false });
  },

  componentWillMount() {
    const { pixel } = this.props;
    Object.assign(canvasOptions, {
      width: 8 * (pixel.width * pixel.scale),
      height: 8 * (pixel.height * pixel.scale)
    });
  },

  render() {
    const { mouse, pixel, sprite } = this.props;
    const { showContextMenu, showSpriteAttrs } = this.state;

    return (
      <section id="sprite-editor">
        <section id="sprite-ui-container">
          {
            (showContextMenu) ?
              <ContextMenu
                menuItems={ contextMenuItems }
                onMouseLeave={ this.closeContextMenu }
                onClick={ this.closeContextMenu }
                pixel={ pixel }
              /> :
              null
          }
          <h1 className="sprite-header ui-menu-bar draggable"
            style={{ width: `${ canvasOptions.width }px`  }}
          >
            { sprite.name }
            <UiMenuButton onClick={ this.openContextMenu } />
          </h1>
          <div id="sprite-container"
            style={{
              width: `${ canvasOptions.width }px`,
              height: `${ canvasOptions.height }px`
            }}
          >
            <SpriteCanvas
              showGrid={ true }
              mouse={ mouse }
              width={ canvasOptions.width }
              height={ canvasOptions.height }
              pixel={ pixel }
              savePixelData={ this.props.savePixelData }
              workingCanvas={ this.props.workingCanvas }
              undoCanvas={ this.props.undoCanvas }
              redoCanvas={ this.props.redoCanvas }
            />
          </div>
        </section>
        <SpriteTools pixel={ pixel } setColor={ this.props.setColor } />
        <SpritePalette pixel={ pixel } setColor={ this.props.setColor } />
        {
          (showSpriteAttrs) ?
            <Modal /> :
            null
        }
        <SpritePreview
          pixel={ pixel }
          dataURL={ this.props.workingCanvas.dataURL }
          width={ canvasOptions.width }
          height={ canvasOptions.height }
        />
      </section>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    pixel: state.pixel,
    workingCanvas: state.workingCanvas.present,
    mouse: state.mouse,
    sprite: state.sprite,
    palettes: state.palettes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setColor: color => dispatch(setColor(color)),
    setSize: size => dispatch(setSize(size)),
    setScale: scale => dispatch(setScale(scale)),
    savePixelData: (pixel, dataURL) => dispatch(savePixelData(pixel, dataURL)),
    undoCanvas: () => dispatch(UndoActionCreators.undo()),
    redoCanvas: () => dispatch(UndoActionCreators.redo()),
    saveSpriteData: (sprite) => dispatch(saveSpriteData(sprite)),
    savePaletteData: (id, palette) => dispatch(savePaletteData(id, palette)),
    setMouseCoords: mouse => dispatch(setMouseCoords(mouse))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpriteEditor);
