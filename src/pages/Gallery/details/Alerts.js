import React from 'react';
import Page from './Page';
import Live from '../previews/Alerts';
import codeFiles from './codeFiles';

export default () => (
  <Page title="Alerts with @bandwidth/redux-facet-alerts" code={codeFiles['Alerts.js']}>
    <Live />
  </Page>
);
