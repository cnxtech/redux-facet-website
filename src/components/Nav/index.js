import React from 'react';
import Bar from './Bar';
import A from 'components/A';

export default () => (
  <Bar>
    <A.Internal to="/">Home</A.Internal>
    <A.Internal to="/use">Get started</A.Internal>
    <A.Internal to="/gallery">Gallery</A.Internal>
  </Bar>
);
