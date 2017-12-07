import { get } from 'lodash';

export default {
  colors: {
    brand: [
      '#DE703C',
      '#FBB040',
      '#506F86',
    ],
    background: {
      default: '#FBF7F7',
      inverted: '#2F3C4F',
      dim: '#bebece',
      light: '#ececef',
    },
    text: {
      default: '#2F3C4F',
      inverted: '#FBF7F7',
      light: '#bebece',
      medium: '#8a8a8f',
    },
  },

  get: key => ({ theme }) => get(theme, key),
};
