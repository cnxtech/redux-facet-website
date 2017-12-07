import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Work+Sans:200');

  body,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Arial, sans-serif;
    background: ${theme.get('colors.background.default')};
    color: ${theme.get('colors.text.default')};
    line-height: 1.5;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
