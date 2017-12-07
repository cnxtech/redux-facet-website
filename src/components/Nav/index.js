import React from 'react';
import Bar from './Bar';
import Link from './Link';

export default () => (
  <Bar>
    <Link to="/">Home</Link>
    <Link to="/use">Use</Link>
    <Link to="/gallery">Gallery</Link>
  </Bar>
);
