import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Home from './components/Home';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>
            <div className="App-body">
              <Route exact path="/" component={Home} />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
