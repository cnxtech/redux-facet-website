import React from 'react';
import Row from '../Row';
import Graphic from './Graphic';
import P from '../../../components/P';
import H3 from '../../../components/H3';

export default () => (
  <Row>
    <Graphic />
    <div>
      <H3>Facets are windows into your data</H3>
      <P>
        Facets transform your application's data into interactive, stateful views.
        Filter, paginate, sort, and more... without writing new action creators or reducers.
      </P>
    </div>
  </Row>
);
