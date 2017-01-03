import React from 'react';
import { Button } from '../elements';

const PencilButton = React.createClass({
  color: 'rgb(255, 0, 0)',

  setPencil() {
    this.props.setColor(this.color);
  },

  render() {
    return (
      <Button
        classNames="icon-pencil"
        title=""
        onClick={ this.setPencil }
      />
    );
  }
});

export default PencilButton;
