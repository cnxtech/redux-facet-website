import React from 'react';
import Section from 'components/Section';
import H1 from 'components/H1';
import P from 'components/P';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

export default () => (
  <Section style={{ gridArea: 'how' }}>
    <H1>How do I use it?</H1>
    <Link to="/use">
      <Button>Get started</Button>
    </Link>
  </Section>
);
