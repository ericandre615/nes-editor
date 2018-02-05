import React, { Component } from 'react';
import { UiContainer } from '../ui-menu';
import TilemapCanvas from './tilemap-canvas.jsx';

export class TilemapEditor extends Component {
  render() {
    const { selectedSprite } = this.props;

    return (
      <section id="tilemap-editor">
        <UiContainer
          id="tilemap-editor-container"
          title="Tilemap Editor"
          draggable={ true }
        >
          <TilemapCanvas
            showGrid
            scale={ 2 }
            selectedSprite={ selectedSprite }
          />
        </UiContainer>
      </section>
    );
  }
};

export default TilemapEditor;
