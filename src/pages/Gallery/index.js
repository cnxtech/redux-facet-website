import React from 'react';
import Page from 'components/Page';
import H1 from 'components/H1';
import P from 'components/P';
import A from 'components/A';
import Code from 'components/Code';
import Container from './Container';
import { Switch, Route } from 'react-router-dom';

import AlertsPreview from './previews/Alerts';
import PaginationPreview from './previews/Pagination';
import FiltersPreview from './previews/Filters';
import SortPreview from './previews/Sort';
import ComposePreview from './previews/Compose';
import Preview from './Preview';

import AlertsPage from './details/Alerts';
import PaginationPage from './details/Pagination';
import FiltersPage from './details/Filters';
import SortPage from './details/Sort';
import ComposePage from './details/Compose';

export default () => (
  <Page>
    <div style={{ textAlign: 'center' }}>
      <H1>Behaviors available for facets</H1>
      <P>
        Browse the <A href="https://github.com/topics/redux-facet-behavior">redux-facet-behavior</A>
        {' topic on GitHub for more.'}
      </P>
      <P>
        Looking for more examples and use cases? Check out the{' '}
        <A href="https://github.com/Bandwidth/redux-facet/wiki/Recipes">
          recipes
        </A> in the documentation.
      </P>
    </div>
    <Container>
      <Preview
        title="Alerts with @bandwidth/redux-facet-alerts"
        id="alerts"
        url="https://github.com/bandwidth/redux-facet-alerts"
      >
        <P>
          <Code>redux-facet-alerts</Code> manages a full-featured alerting system
        </P>
        <AlertsPreview />
      </Preview>
      <Preview
        title="Paginating with @bandwidth/redux-facet-pagination"
        id="pagination"
        url="https://github.com/bandwidth/redux-facet-pagination"
      >
        <P>
          <Code>redux-facet-pagination</Code> slices up data for you and keeps track of
          page state and size
        </P>
        <PaginationPreview />
      </Preview>
      <Preview
        title="Filtering with @bandwidth/redux-facet-filters"
        id="filters"
        url="https://github.com/bandwidth/redux-facet-filters"
      >
        <P>
          <Code>redux-facet-filters</Code> reduces your data by filters you define
        </P>
        <FiltersPreview />
      </Preview>
      <Preview
        title="Sorting with @bandwidth/redux-facet-filters"
        id="sort"
        url="https://github.com/bandwidth/redux-facet-filters"
      >
        <P>
          <Code>redux-facet-filters</Code> can also help you sort data sets
        </P>
        <SortPreview />
      </Preview>
      <Preview
        title="Composing multiple behaviors"
        id="compose"
        url="https://github.com/bandwidth/redux-facet-filters"
      >
        <P>
          We can compose multiple behaviors to achieve complex interaction
        </P>
        <ComposePreview />
      </Preview>
    </Container>

    <Switch>
      <Route path="/gallery/alerts" component={AlertsPage} />
      <Route path="/gallery/pagination" component={PaginationPage} />
      <Route path="/gallery/filters" component={FiltersPage} />
      <Route path="/gallery/sort" component={SortPage} />
      <Route path="/gallery/compose" component={ComposePage} />
    </Switch>
  </Page>
);
