import React from 'react';
import Page from 'components/Page';

import Intro from './sections/Intro';
import Why from './sections/Why';
import Diagrams from './sections/Diagrams';
import Who from './sections/Who';
import How from './sections/How';

export default () => (
  <Page>
    <Intro />
    <Diagrams />
    <How />
    <Why />
    <Who />
  </Page>
);
