import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMouse from '../../selectors/mouse.js';
import { getSelectedSprite } from '../../selectors/sprite.js';
import { getSpritesheet } from '../../selectors/spritesheets.js';
import { getTilemap } from '../../selectors/tilemaps.js';
import { updateTilemap } from '../../actions/tilemap-actions.js';
import SpriteEditor from '../sprite-editor';
import SpritesheetEditor from '../spritesheet-editor';
import TilemapEditor from '../tilemap-editor';
import NesPalette from '../nes-palette';
import { toggleMouseDown, setMouseCoords } from '../../actions/mouse-actions';

import './home.less';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    const { dispatchSetMouseCoords } = this.props;

    dispatchSetMouseCoords({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  }

  render() {
    const {
      selectedSprite,
      selectedSpritesheet,
      selectedTilemap,
      dispatchUpdateTilemap,
      dispatchToggleMouseDown,
      mouse
     } = this.props;

    return (
      <section
        id="home"
        onMouseDown={ dispatchToggleMouseDown }
        onMouseUp={ dispatchToggleMouseDown }
        onMouseMove={ this.handleMouseMove }
      >
        <SpriteEditor mouse={ mouse } />
        <NesPalette />
        <TilemapEditor
          mouse={ mouse }
          tilemap={ selectedTilemap }
          selectedSprite={ selectedSprite }
          updateTilemap={ dispatchUpdateTilemap }
        />
        <SpritesheetEditor
          mouse={ mouse }
          spritesheet={ selectedSpritesheet }
          selectedSprite={ selectedSprite }
        />
      </section>
    );
  }
};

const mapStateToProps = state => ({
  selectedSprite: getSelectedSprite(state),
  selectedTilemap: getTilemap('default', state),
  selectedSpritesheet: getSpritesheet('default', state),
  mouse: getMouse(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateTilemap: tilemap => dispatch(updateTilemap(tilemap)),
  dispatchToggleMouseDown: () => dispatch(toggleMouseDown()),
  dispatchSetMouseCoords: mouse => dispatch(setMouseCoords(mouse))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
