import React from 'react';
import Page from './Page';
import Live from '../previews/Filters';
import codeFiles from './codeFiles';

export default () => (
  <Page title="Filtering with @bandwidth/redux-facet-filters" code={codeFiles['Filters.js']}>
    <Live />
  </Page>
);
