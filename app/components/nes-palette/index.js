import React from 'react';
import { nesPalette } from '../../../config';
import { Pixel } from '../elements';

import './nes-palette.less';

const NesPalette = React.createClass({

  render() {
    const nesPixels = nesPalette.map(color => {
      return (
        <li key={ color.name }>
          <Pixel
            id={ color.name }
            color={ color.hex }
            displayColor={ color.web }
          />
        </li>
      );
    });

    return (
      <section id="nes-palette" className="ui-container">
        <h2 className="ui-menu-bar draggable">NES Palette</h2>
        <ul>
          { nesPixels }
        </ul>
      </section>
    );
  }
});

export default NesPalette;
