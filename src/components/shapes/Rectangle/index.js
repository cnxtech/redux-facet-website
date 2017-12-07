import React from 'react';

export default ({ size, fill, stroke, x, y }) => (
  <svg
    width={size}
    preserveAspectRatio
    viewBox="0 0 10 16"
    x={x}
    y={y}
  >
    <polygon
      points="0,3 10,0 10,13 0,16"
      vectorEffect="non-scaling-stroke"
      style={{ fill, stroke, strokeWidth: '1px', fillOpacity: 0.7 }}
    />
  </svg>
);
