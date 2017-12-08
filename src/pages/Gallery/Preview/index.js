import React from 'react';
import Item from './Item';
import Styles from './Styles';
import H3 from 'components/H3';
import A from 'components/A';
import { Link } from 'react-router-dom';

export default ({ title, id, children, url }) => (
  <Item>
    <H3>{title}</H3>
    <Styles>
      {children}
    </Styles>
    <div>
      <A href={url}>Go to the library</A>
      <A.Internal to={`/gallery/${id}`}>View the code</A.Internal>
    </div>
  </Item>
);
