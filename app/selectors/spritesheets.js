export const getSpritesheet = (name, state) => state.spritesheets[name] || {};
export const getSpritesheets = state => state.spritesheets || [];

export default {
  getSpritesheet,
  getSpritesheets
};
