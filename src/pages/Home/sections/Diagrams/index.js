import React from 'react';
import Section from 'components/Section';

import Transform from './Transform';
import Augment from './Augment';
import Repeat from './Repeat';
import Compose from './Compose';

export default () => (
  <Section big>
    <Transform />
    <Augment />
    <Repeat />
    <Compose />
  </Section>
);
