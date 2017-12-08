/**
 * In this example, we use the filter behavior to sort our
 * data.
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import facet, { combineFacetReducers, compose } from '@bandwidth/redux-facet';
import withFilteredData, { filterReducer } from '@bandwidth/redux-facet-filters';

// first, let's create some test data: 15 random numbers
const data = new Array(15).fill(null).map(() => Math.floor(Math.random() * 100));

const reducer = combineReducers({
  // mounting facet reducers in our global state
  [combineFacetReducers.key]: combineFacetReducers({
    // our facet is called 'list'
    list: combineReducers({
      // mounting our filtering behavior
      [filterReducer.key]: filterReducer,
    }),
  }),
});

const store = createStore(reducer);

const SortControls = ({ filters, replaceFilter }) => (
  <div className="SortControls">
    <button
      onClick={() => replaceFilter(0, 0)}
      disabled={!filters[0]}
    >
      None
    </button>
    <button
      onClick={() => replaceFilter(0, 1)}
      disabled={filters[0] === 1}
    >
      Ascending
    </button>
    <button
      onClick={() => replaceFilter(0, -1)}
      disabled={filters[0] === -1}
    >
      Descending
    </button>
  </div>
);

const ListItem = ({ children }) => (
  <div className="ListItem">
    {children}
  </div>
);

// a list view component
const ListView = ({ filters, replaceFilter, filteredData }) => (
  <div className="ListView">
    <div className="ListView--items">
      {filteredData.map((data, idx) => <ListItem key={idx}>{data}</ListItem>)}
    </div>
    <SortControls
      filters={filters}
      replaceFilter={replaceFilter}
    />
  </div>
);

// the filterReducer is like a Redux reducer, but it takes
// the items list and each filter successively and returns
// a filtered list.
const filterDataReducer = (list, filter) => {
  // using slice() in these to create a copy of the array.
  switch (filter) {
    case 1:
      return list.slice().sort((a, b) => a - b);
    case -1:
      return list.slice().sort((a, b) => b - a);
    default:
      return list.slice();
  }
};

// we provide 'data' to withFilteredData to indicate
// the name of the prop it should use for raw data.
const List = compose(
  facet('list'),
  withFilteredData('data', filterDataReducer),
)(ListView);

// render our list with our demo data
export default () => (
  <Provider store={store}>
    <List data={data} />
  </Provider>
);
