import React from 'react';
import { Button } from '../elements';

const EraserButton = React.createClass({
  color: 'eraser',

  setEraser() {
    this.props.setColor(this.color);
  },

  render() {
    return (
      <Button
        classNames="icon-eraser"
        title=""
        onClick={ this.setEraser }
      />
    );
  }
});

export default EraserButton;
