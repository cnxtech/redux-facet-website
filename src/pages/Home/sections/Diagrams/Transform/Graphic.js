import React from 'react';
import Triangle from 'components/shapes/Triangle';
import Rectangle from 'components/shapes/Rectangle';
import GraphicContainer from '../GraphicContainer';
import { withTheme } from 'styled-components';

export default withTheme(({ theme }) => (
  <GraphicContainer>
    <svg
      viewBox="0 0 30 15"
    >
      <Rectangle
        size={5}
        fill={theme.colors.background.dim}
        stroke="white"
        y={-1.5}
        x={0}
      />
      <line
        x1="2.5"
        y1="6"
        x2="12"
        y2="7"
        strokeDasharray="3, 3"
        stroke={theme.colors.background.dim}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <Triangle fill={theme.colors.brand[0]} size={5} x={10} y={4.5} />
      <line
        x1="12"
        y1="7"
        x2="22.5"
        y2="8"
        strokeDasharray="3, 3"
        stroke={theme.colors.brand[0]}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <Rectangle
        size={5}
        fill={theme.colors.brand[0]}
        stroke="white"
        y={0.5}
        x={20}
      />
    </svg>
  </GraphicContainer>
));
