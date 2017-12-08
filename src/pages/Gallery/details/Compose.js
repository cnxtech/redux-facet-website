import React from 'react';
import Page from './Page';
import Live from '../previews/Compose';
import codeFiles from './codeFiles';

export default () => (
  <Page title="Composing multiple behaviors" code={codeFiles['Compose.js']}>
    <Live />
  </Page>
);
