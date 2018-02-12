import React from 'react';
import { connect } from 'react-redux';
import { getSelectedSprite } from '../../selectors/sprite.js';
import { getTilemap } from '../../selectors/tilemaps.js';
import { updateTilemap } from '../../actions/tilemap-actions.js';
import SpriteEditor from '../sprite-editor';
import TilemapEditor from '../tilemap-editor';
import NesPalette from '../nes-palette';

import './home.less';

export const Home = React.createClass({
  render() {
    const { selectedSprite, selectedTilemap, dispatchUpdateTilemap } = this.props;

    console.log('SelectedSprite ', selectedSprite);
    return (
      <section id="home">
          <SpriteEditor />
          <NesPalette />
          <TilemapEditor
            tilemap={ selectedTilemap }
            selectedSprite={ selectedSprite }
            updateTilemap={ dispatchUpdateTilemap }
          />
      </section>
    );
  }
});

const mapStateToProps = state => ({
  selectedSprite: getSelectedSprite(state),
  selectedTilemap: getTilemap('default', state)
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateTilemap: tilemap => dispatch(updateTilemap(tilemap))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
