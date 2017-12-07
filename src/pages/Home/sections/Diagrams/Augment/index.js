import React from 'react';
import Row from '../Row';
import Graphic from './Graphic';
import P from 'components/P';
import H3 from 'components/H3';

export default () => (
  <Row reverse>
    <Graphic />
    <div>
      <H3>Facets augment your view</H3>
      <P>
        With facets, you can add reusable behaviors to all of the interactive views in your application.
        Stop re-inventing the wheel and start writing less code.
      </P>
    </div>
  </Row>
);
