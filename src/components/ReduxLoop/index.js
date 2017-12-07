import React from 'react';

export default ({ width = '100%' }) => {
  const arrowStyle = { stroke: 'black', fill: 'none', vectorEffect: 'non-scaling-stroke' };
  return (
    <svg
      width={width}
      height={width * (9.0 / 16.0)}
      viewBox={`0 0 16 9`}
    >
      <path
        d="M1,2.5 Q 1,1 3,1 L 4,1 L 3.75,1.2"
        style={arrowStyle}
      />
      <path
        d="M 13.8,2.25 L 14,2.5 Q 14,1 12,1 L 11,1"
        style={arrowStyle}
      />
      <path
        d="M14,6.5 Q 14,8 12,8 L 11,8 L 11.25,7.8"
        style={arrowStyle}
      />
      <path
        d="M 1.2,6.75 L 1,6.5 Q 1,8 3,8 L 4,8"
        style={arrowStyle}
      />
    </svg>
  );
};
