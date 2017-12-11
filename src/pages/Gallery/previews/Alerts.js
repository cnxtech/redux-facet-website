/**
 * All the code necessary to create and render facets which hook into
 * a powerful alerting system. Facet containers will provide
 * props for rendering, creating and dismissing alerts.
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import facet, { combineFacetReducers, compose } from '@bandwidth/redux-facet';
import withAlerts, { alertReducer } from '@bandwidth/redux-facet-alerts';

const reducer = combineReducers({
  // mounting facet reducers in our global state
  [combineFacetReducers.key]: combineFacetReducers({
    // we have two facets: 'global' and 'local'
    global: combineReducers({
      // both have the alert behavior mounted
      [alertReducer.key]: alertReducer,
    }),

    local: combineReducers({
      [alertReducer.key]: alertReducer,
    }),
  }),
});

const store = createStore(reducer);

// a component to render a single alert
const Alert = ({ children, dismiss }) => (
  <div className="Alert">
    <span>{children}</span>
    <button className="Alert--dismiss" onClick={dismiss}>&times;</button>
  </div>
);

// a component to render our alert state
const Alerts = ({ alerts, dismissAlert, dismissAll }) => alerts.length > 0 && (
  <div className="Alerts">
    {alerts.map(alert => (
      <Alert
        key={alert.id}
        dismiss={() => dismissAlert(alert.id)}
      >
        {alert.message}
      </Alert>
    ))}
    <button className="Alerts-dismiss" onClick={dismissAll}>Clear</button>
  </div>
);

// a generic view component which includes alert rendering
const View = ({ alerts, createAlert, dismissAlert, dismissAllAlerts, children, facetName }) => (
  <div className="View">
    <h3>{facetName} facet</h3>
    <Alerts alerts={alerts} dismissAlert={dismissAlert} dismissAll={dismissAllAlerts} />
    <button
      className="View--createAlert"
      onClick={() => createAlert(`Hello from ${facetName}!`)}
    >
      Create an alert
    </button>
    <div className="View--content">
      {children}
    </div>
  </div>
);

// creating two containers, one for 'global' facet
// and one for our 'local'
const Global = compose(
  facet('global'),
  withAlerts(),
)(View);

const Local = compose(
  facet('local'),
  withAlerts(),
)(View);

// local will be rendered within global.
// regardless of nesting, the alert actions
// dispatched from each container will be
// associated only with that facet.
export default () => (
  <Provider store={store}>
    <Global>
      <Local />
    </Global>
  </Provider>
);
