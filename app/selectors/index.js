import { getSelectedSprite } from './sprite.js';
import tilemapSelectors from './tilemaps';

const { getTilemap, getTilemaps } = tilemapSelectors;

export default {
  getSelectedSprite,
  getTilemap,
  getTilemaps
};
