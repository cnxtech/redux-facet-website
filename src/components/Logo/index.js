import React from 'react';
import Triangle from '../shapes/Triangle';
import { withTheme } from 'styled-components';

export default withTheme(({ theme, size = 120 }) => (
  <svg
    viewBox={`0 0 16 10`}
    width={size * 1.6}
    height={size}
  >
    <Triangle fill={theme.colors.brand[0]} size={10}  />
    <Triangle fill={theme.colors.brand[1]} size={10} x={3} />
    <Triangle fill={theme.colors.brand[2]} size={10} x={6} />
  </svg>
));
