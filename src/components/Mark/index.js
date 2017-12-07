import React from 'react';
import Logo from 'components/Logo';
import Word from './Word';
import Container from './Container';
import H2 from 'components/H2';

export default () => (
  <Container>
    <Logo />
    <div>
      <Word>redux-facet</Word>
      <H2>
        Track actions, reuse logic, and reduce boilerplate.
      </H2>
    </div>
  </Container>
);
