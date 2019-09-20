import getMouse from './mouse.js';
import { getSelectedSprite } from './sprite.js';
import tilemapSelectors from './tilemaps';
import spritesheetSelectors from './spritesheets';

const { getTilemap, getTilemaps } = tilemapSelectors;
const { getSpritesheet, getSpritesheets } = spritesheetSelectors;

export default {
  getSelectedSprite,
  getMouse,
  getTilemap,
  getTilemaps,
  getSpritesheet,
  getSpritesheets
};
