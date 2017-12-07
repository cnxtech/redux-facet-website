import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AppContainer from 'components/AppContainer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Use from 'pages/Use';
import Gallery from 'pages/Gallery';
import Nav from 'components/Nav';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppContainer className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/use" component={Use} />
              <Route path="/gallery" component={Gallery} />
            </Switch>
          </AppContainer>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
