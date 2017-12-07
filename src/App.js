import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AppContainer from './components/AppContainer';

import Intro from './sections/Intro';
import Why from './sections/Why';
import Diagrams from './sections/Diagrams';
import How from './sections/How';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer className="App">
          <Intro />
          <Diagrams />
          <Why />
          <How />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
