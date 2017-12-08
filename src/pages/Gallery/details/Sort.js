import React from 'react';
import Page from './Page';
import Live from '../previews/Sort';
import codeFiles from './codeFiles';

export default () => (
  <Page title="Sort with @bandwidth/redux-facet-filters" code={codeFiles['Sort.js']}>
    <Live />
  </Page>
);
