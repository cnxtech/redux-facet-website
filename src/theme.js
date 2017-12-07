import { get } from 'lodash';

export default {
  colors: {
    brand: [
      '#DE703C',
      '#FBB040',
      '#506F86',
      '#2F3C4F',
    ],
    background: {
      default: '#FBF7F7',
      transparent: 'rgba(251, 247, 247, 0.5)',
      inverted: '#2F3C4F',
      dim: '#bebece',
      light: '#ececef',
      dimTransparent: 'rgba(190, 190, 206, 0.5)'
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
