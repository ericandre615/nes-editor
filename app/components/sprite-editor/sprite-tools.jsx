import React from 'react';
import EraserButton from './eraser-button.jsx';
import PencilButton from './pencil-button.jsx';
import { UiContainer } from '../ui-menu';

const SpriteTools = React.createClass({

  render() {
    return (
      <UiContainer
        id="sprite-tools"
        title="Sprite Tools"
        draggable={ true }
      >
        <EraserButton setColor={ this.props.setColor } />
        <PencilButton setColor={ this.props.setColor } />
      </UiContainer>
    );
  }
});

export default SpriteTools;
