import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import facet, { combineFacetReducers, compose } from '@bandwidth/redux-facet';
import withAlerts, { alertReducer } from '@bandwidth/redux-facet-alerts';

const reducer = combineReducers({
  [combineFacetReducers.key]: combineFacetReducers({
    global: combineReducers({
      [alertReducer.key]: alertReducer,
    }),

    local: combineReducers({
      [alertReducer.key]: alertReducer,
    }),
  }),
});

const store = createStore(reducer);

const Alert = ({ children, dismiss }) => (
  <div className="Alert">
    {children}
    <button className="Alert--dismiss" onClick={dismiss}>&times;</button>
  </div>
);

const Alerts = ({ alerts, dismissAlert, dismissAll }) => (
  <div className="Alerts">
    {alerts.map(alert => <Alert key={alert.id} dismiss={() => dismissAlert(alert.id)}>{alert.message}</Alert>)}
    <button className="Alerts-dismiss" onClick={dismissAll}>Clear</button>
  </div>
);

const View = ({ alerts, createAlert, dismissAlert, dismissAll, children, facetName }) => (
  <div className="View">
    <Alerts alerts={alerts} dismissAlert={dismissAlert} dismissAll={dismissAll} />
    <button className="View--createAlert" onClick={() => createAlert(`Hello from ${facetName}!`)}>Create an alert</button>
    <div className="View--content">
      {children}
    </div>
  </div>
);

const Global = compose(
  facet('global'),
  withAlerts(),
)(View);

const Local = compose(
  facet('local'),
  withAlerts(),
)(View);

export default () => (
  <Provider store={store}>
    <Global>
      <Local />
    </Global>
  </Provider>
);
