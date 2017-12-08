/**
 * All the code necessary to create and render facets which filter our
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

const ListItem = ({ children }) => (
  <div className="ListItem">
    {children}
  </div>
);

// a list view component
const ListView = ({ filters, addFilter, removeFilter, filteredData }) => (
  <div className="ListView">
    <div className="ListView--items">
      {filteredData.map((data, idx) => <ListItem key={idx}>{data}</ListItem>)}
    </div>
    <Filters
      filters={filters}
      addFilter={addFilter}
      removeFilter={removeFilter}
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
