import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import P from 'components/P';
import Code from 'components/Code';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

export default () => (
  <Step>
    <H3>That's only part of the toolbox</H3>
    <P>
      <Code>redux-facet</Code> includes tools to work with <Code>redux-saga</Code>,
      enhancers to retrieve facet-specific data, and more.
    </P>
    <a href="https://github.com/Bandwidth/redux-facet">
      <Button>Read the docs</Button>
    </a>
    <P>
      If you're integrating facets into an existing Redux codebase, you may want to read
      our guide on preparing and synchronizing your application data in a facet-driven world.
    </P>
    <a href="https://github.com/Bandwidth/redux-facet/wiki/Preparing-your-Data-for-Facets">
      <Button>Read the guide</Button>
    </a>
    <P>
      Beyond just the base library, there are pre-built behavior libraries which can
      instantly add value to your application.
    </P>
    <Link to="/gallery">
      <Button>Browse behaviors</Button>
    </Link>
  </Step>
);
