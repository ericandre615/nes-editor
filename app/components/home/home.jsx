import React from 'react';
import { connect } from 'react-redux';
import { getSelectedSprite } from '../../selectors/sprite.js';
import SpriteEditor from '../sprite-editor';
import TilemapEditor from '../tilemap-editor';
import NesPalette from '../nes-palette';

import './home.less';

export const Home = React.createClass({
  render() {
    const { selectedSprite } = this.props;

    console.log('SelectedSprite ', selectedSprite);

    return (
      <section id="home">
          <h1>Home Section</h1>
          <p>Lorem ipsum stuff</p>
          <SpriteEditor />
          <NesPalette />
          <TilemapEditor
            selectedSprite={ selectedSprite }
          />
      </section>
    );
  }
});

const mapStateToProps = state => ({
  selectedSprite: getSelectedSprite(state),
});

export default connect(mapStateToProps)(Home);
