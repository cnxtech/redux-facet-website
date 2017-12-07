import React from 'react';
import Triangle from 'components/shapes/Triangle';
import GraphicContainer from '../GraphicContainer';
import { withTheme } from 'styled-components';

export default withTheme(({ theme }) => (
  <GraphicContainer>
    <svg
      viewBox="0 0 15 15"
    >
      <Triangle fill={theme.colors.brand[0]} size={10} x={2.5} y={3.5} />
      <Triangle fill={theme.colors.brand[1]} size={10} x={3.5} y={3.5} />
      <Triangle fill={theme.colors.brand[2]} size={10} x={4.5} y={3.5} />
    </svg>
  </GraphicContainer>
));
