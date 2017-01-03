import React from 'react';

import './pixel.less';

const Pixel = React.createClass({
  render() {
    return (
      <div
        className="sprite-pixel"
        id={ this.props.id }
        data-color={ this.props.color }
        style={{ backgroundColor: this.props.displayColor }}
      />
    );
  }
});

export default Pixel;
