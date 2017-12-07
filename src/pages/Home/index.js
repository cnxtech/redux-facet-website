import React from 'react';
import Page from 'components/Page';

import Intro from './sections/Intro';
import Why from './sections/Why';
import Diagrams from './sections/Diagrams';
import How from './sections/How';

export default () => (
  <Page>
    <Intro />
    <Diagrams />
    <Why />
    <How />
  </Page>
);
