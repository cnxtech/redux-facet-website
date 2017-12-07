import React from 'react';
import Triangle from '../../../components/shapes/Triangle';
import GraphicContainer from '../GraphicContainer';
import { withTheme } from 'styled-components';

export default withTheme(({ theme }) => (
  <GraphicContainer>
    <svg
      preserveAspectRatio
      viewBox="0 0 30 15"
    >
      <Triangle fill={theme.colors.brand[2]} size={8} x={3} y={3.5} />
      <Triangle fill={theme.colors.brand[2]} size={8} x={10} y={3.5} />
      <Triangle fill={theme.colors.brand[2]} size={8} x={17} y={3.5} />
    </svg>
  </GraphicContainer>
));
