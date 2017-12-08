import React from 'react';
import Section from 'components/Section';
import H1 from 'components/H1';
import P from 'components/P';
import Code from 'components/Code';
import A from 'components/A';
import logo from './bandwidth-logo.svg';

export default () => (
  <Section style={{ gridArea: 'who' }}>
    <H1>Who made this?</H1>
    <P>
      <Code>redux-facet</Code> was created by{' '}
      <A href="https://github.com/a-type">Grant Forrest (@a-type)</A>{' '}
      as an open source project at <A href="https://bandwidth.com">Bandwidth</A>.
    </P>
    <P>
      We're using it in our Redux projects to help us maintain, organize and
      test our code as our applications grow in scale.
    </P>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={logo} width="400px" style={{ margin: 'auto 18px' }} />
      <P>
        Bandwidth and the BW logo are trademarks for Bandwidth.com, Inc.
        <Code>redux-facet</Code> is licensed MIT.
      </P>
    </div>
  </Section>
);
