import React, { Component } from 'react';
import { UiContainer } from '../ui-menu';
import SpritesheetCanvas from './spritesheet-canvas.jsx';

export class SpritesheetEditor extends Component {
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
    const { spritesheet } = this.props;
    const { height } = this.state;

    return (
      <section id="spritesheet-editor">
        <UiContainer
          id="spritesheet-editor-container"
          title="Spritesheet Editor"
          draggable={ true }
          padding={ false }
          height={ height }
        >
          <SpritesheetCanvas
            showGrid
            scale={ 4 }
            spritesheet={ spritesheet }
            ref={ this.getHeight }
          />
        </UiContainer>
      </section>
    );
  }
};

export default SpritesheetEditor;
