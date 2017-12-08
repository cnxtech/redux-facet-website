/**
 * All the code necessary to create and render facets which paginate
 * data. Our facet container will provide a page of our source data,
 * and props for changing the page.
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import facet, { combineFacetReducers, compose } from '@bandwidth/redux-facet';
import withPaginatedData, { paginationReducer } from '@bandwidth/redux-facet-pagination';

// first, let's create some test data: 500 incrementing numbers
const data = new Array(500).fill(null).map((_, index) => index);

const reducer = combineReducers({
  // mounting facet reducers in our global state
  [combineFacetReducers.key]: combineFacetReducers({
    // our facet is called 'list'
    list: combineReducers({
      // mounting our pagination behavior
      [paginationReducer.key]: paginationReducer,
    }),
  }),
});

const store = createStore(reducer);

// a component to render pagination controls
const Pagination = ({ currentPage, pageCount, nextPage, previousPage }) => (
  <div className="Pagination">
    <button
      className="Pagination--previous"
      onClick={previousPage}
      disabled={currentPage === 0}
    >
      &lt;
    </button>
    <span className="Pagination--display">
      {`page ${currentPage + 1} / ${pageCount}`}
    </span>
    <button
      className="Pagination--next"
      onClick={nextPage}
      disabled={currentPage === pageCount - 1}
    >
      &gt;
    </button>
  </div>
);

const ListItem = ({ children }) => (
  <div className="ListItem">
    {children}
  </div>
);

// a list view component
const ListView = ({ currentPage, pageCount, nextPage, previousPage, paginatedData }) => (
  <div className="ListView">
    <div className="ListView--items">
      {paginatedData.map(data => <ListItem key={data}>{data}</ListItem>)}
    </div>
    <Pagination
      currentPage={currentPage}
      pageCount={pageCount}
      nextPage={nextPage}
      previousPage={previousPage}
    />
  </div>
);

// we provide 'data' to withPaginatedData to indicate
// the name of the prop it should use for raw data.
const List = compose(
  facet('list'),
  withPaginatedData('data'),
)(ListView);

// render our list with our demo data
export default () => (
  <Provider store={store}>
    <List data={data} pageSize={15} />
  </Provider>
);
