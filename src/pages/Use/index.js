import React from 'react';
import Page from 'components/Page';
import H1 from 'components/H1';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

export default () => (
  <Page>
    <H1>How do I use it?</H1>
    <Step1 />
    <Step2 />
    <Step3 />
    <Step4 />
  </Page>
);
