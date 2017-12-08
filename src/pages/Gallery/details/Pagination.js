import React from 'react';
import Page from './Page';
import Live from '../previews/Pagination';
import codeFiles from './codeFiles';

export default () => (
  <Page title="Paging with @bandwidth/redux-facet-pagination" code={codeFiles['Pagination.js']}>
    <Live />
  </Page>
);
