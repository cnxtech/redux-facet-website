import React from 'react';
import Row from '../Row';
import Graphic from './Graphic';
import P from 'components/P';
import H3 from 'components/H3';

export default () => (
  <Row>
    <Graphic />
    <div>
      <H3>Facets are reusable</H3>
      <P>
        Apply the same facet to as many data sets as you like. Each one operates independently
        of the others.
      </P>
    </div>
  </Row>
);
