/**
 * In this example, we combine filters and pagination using composition
 * to create more interaction options and powerfully computed data.
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import facet, { combineFacetReducers, compose } from '@bandwidth/redux-facet';
import withFilteredData, { filterReducer } from '@bandwidth/redux-facet-filters';
import withPaginatedData, { paginationReducer } from '@bandwidth/redux-facet-pagination';
import { pick } from 'lodash';

// first, let's create some test data: 200 random numbers
const data = new Array(200).fill(null).map(() => Math.floor(Math.random() * 100));

const reducer = combineReducers({
  // mounting facet reducers in our global state
  [combineFacetReducers.key]: combineFacetReducers({
    // our facet is called 'list'
    list: combineReducers({
      // we mount both filters and pagination
      [filterReducer.key]: filterReducer,
      [paginationReducer.key]: paginationReducer,
    }),
  }),
});

const store = createStore(reducer);

const Filter = ({ type, value, remove }) => (
  <li className="Filter">
    <span className="Filter--type">{type}</span>
    <span>:</span>
    <span className="Filter--value">{value}</span>
    <button onClick={remove}>&times;</button>
  </li>
);

// a stateful component which can create a filter
class FilterCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: 'greaterThan', value: 0 };
  }

  onTypeChanged = (ev) => {
    this.setState({ type: ev.target.value });
  };

  onValueChanged = (ev) => {
    this.setState({ value: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addFilter({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FilterCreator">
        <select onChange={this.onTypeChanged} value={this.state.type}>
          <option value="greaterThan">&gt;</option>
          <option value="lessThan">&lt;</option>
          <option value="divisibleBy">divisible by</option>
        </select>
        <input onChange={this.onValueChanged} type="number" value={this.state.value} />
        <button type="submit">Add filter</button>
      </form>
    );
  }
}

// a component to render filter controls
const Filters = ({ filters, addFilter, removeFilter }) => (
  <div className="Filters">
    <ul className="Filters--list">
      {filters.map((filter, index) => (
        <Filter
          {...filter}
          key={index}
          remove={() => removeFilter(index)}
        />
      ))}
    </ul>
    <FilterCreator addFilter={addFilter} />
  </div>
);

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
const ListView = (props) => (
  <div className="ListView">
    <div className="ListView--items">
      {props.computedData.map((data, idx) => <ListItem key={idx}>{data}</ListItem>)}
    </div>
    <Filters
      {...pick(props, ['filters', 'addFilter', 'removeFilter'])}
    />
    <Pagination
      {...pick(props, ['currentPage', 'pageCount', 'nextPage', 'previousPage'])}
    />
  </div>
);

// the filterReducer is like a Redux reducer, but it takes
// the items list and each filter successively and returns
// a filtered list.
const filterDataReducer = (list, filter) => {
  switch (filter.type) {
    case 'greaterThan':
      return list.filter(item => item > filter.value);
    case 'lessThan':
      return list.filter(item => item < filter.value);
    case 'divisibleBy':
      return list.filter(item => item % filter.value === 0);
    default:
      return list;
  }
};

// we provide 'data' to withFilteredData to indicate
// the name of the prop it should use for raw data.
// we provide 'filteredData' to withPaginatedData,
// since this is the default prop name which
// withFilteredData supplies to its wrapped component.
// finally, we tell withPaginatedData to provide
// the final data set as 'computedData' to ListView.
const List = compose(
  facet('list'),
  withFilteredData('data', filterDataReducer),
  withPaginatedData('filteredData', { dataPropName: 'computedData' }),
)(ListView);

// render our list with our demo data
export default () => (
  <Provider store={store}>
    <List data={data} pageSize={15} />
  </Provider>
);
