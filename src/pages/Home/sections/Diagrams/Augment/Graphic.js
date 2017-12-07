import React from 'react';
import Triangle from 'components/shapes/Triangle';
import Rectangle from 'components/shapes/Rectangle';
import GraphicContainer from '../GraphicContainer';
import { withTheme } from 'styled-components';

export default withTheme(({ theme }) => (
  <GraphicContainer>
    <svg
      viewBox="0 0 20 15"
    >
      <Rectangle
        size={7}
        fill={theme.colors.background.dim}
        stroke="white"
        y={0}
        x={5}
      />
      <Triangle
        fill={theme.colors.brand[1]}
        stroke="none"
        size={5}
        x={7}
        y={5}
      />
    </svg>
  </GraphicContainer>
));
