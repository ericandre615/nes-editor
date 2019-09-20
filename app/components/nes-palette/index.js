import React from 'react';
import { nesPalette } from '../../../config';
import { Pixel } from '../elements';
import { UiContainer } from '../ui-menu';

import './nes-palette.less';

export const NesPalette = (props) => {
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
    <UiContainer
      id="nes-palette"
      title="NES Palette"
      draggable={ true }
    >
      <h2 className="ui-menu-bar draggable">NES Palette</h2>
      <ul>
        { nesPixels }
      </ul>
    </UiContainer>
  );
};

export default NesPalette;
