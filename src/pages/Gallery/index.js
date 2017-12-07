import React from 'react';
import Page from 'components/Page';
import H1 from 'components/H1';
import Container from './Container';

import Alerts from './Alerts';
import Styles from './Styles';

export default () => (
  <Page>
    <H1>Behaviors available for facets</H1>
    <Container>
      <Styles>
        <Alerts />
      </Styles>
    </Container>
  </Page>
);
