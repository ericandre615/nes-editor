import React from 'react';
import SpriteEditor from '../sprite-editor';
import NesPalette from '../nes-palette';

import './home.less';

const Home = React.createClass({
  render() {
    return (
      <section id="home">
          <h1>Home Section</h1>
          <p>Lorem ipsum stuff</p>
          <SpriteEditor />
          <NesPalette />
      </section>
    );
  }
});

export default Home;
