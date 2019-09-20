import React, { Component } from 'react';
import { UiContainer } from '../ui-menu';
import TilemapCanvas from './tilemap-canvas.jsx';

export class TilemapEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null
    };

    this.getHeight = this.getHeight.bind(this);
  }

  getHeight(node) {
    const { height } = node.canvas;

    this.setState({ height })
  }

  render() {
    const { selectedSprite, tilemap, updateTilemap } = this.props;
    const { height } = this.state;

    return (
      <section id="tilemap-editor">
        <UiContainer
          id="tilemap-editor-container"
          title="Tilemap Editor"
          draggable={ true }
          padding={ false }
          height={ height }
        >
          <TilemapCanvas
            showGrid
            scale={ 2 }
            tilemap={ tilemap }
            updateTilemap={ updateTilemap }
            selectedSprite={ selectedSprite }
            ref={ this.getHeight }
          />
        </UiContainer>
      </section>
    );
  }
};

export default TilemapEditor;
