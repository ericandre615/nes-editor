export const getTilemap = (name, state) => state.tilemaps[name] || {};
export const getTilemaps = state => state.tilemaps || [];

export default {
  getTilemap,
  getTilemaps
};
