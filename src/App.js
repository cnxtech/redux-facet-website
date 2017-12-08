import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AppContainer from 'components/AppContainer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Use from 'pages/Use';
import Gallery from 'pages/Gallery';
import Nav from 'components/Nav';
import ScrollToTop from 'components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppContainer className="App">
            <Nav />
            <ScrollToTop>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/use" component={Use} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </ScrollToTop>
          </AppContainer>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
