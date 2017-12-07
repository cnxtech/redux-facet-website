import React from 'react';
import styled from 'styled-components';

export default ({ fill = 'gray', stroke = 'white', size = 10, x, y }) => (
  <svg width={size} height={size} x={x} y={y} viewBox={`0 0 10 10`}>
    <polygon
      points="2,9 9,5 1,1"
      vectorEffect="non-scaling-stroke"
      style={{ fill, stroke, strokeWidth: `1px`, fillOpacity: 0.7 }}
    />
  </svg>
);
