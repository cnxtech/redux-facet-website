import React from 'react';
import Row from '../Row';
import Graphic from './Graphic';
import P from 'components/P';
import H3 from 'components/H3';

export default () => (
  <Row reverse>
    <Graphic />
    <div>
      <H3>Facets are compose-able</H3>
      <P>
        Mix and match behaviors to enhance your containers with complex computed data and interactions
        using only a few lines of code.
      </P>
    </div>
  </Row>
);
