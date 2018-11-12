import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Components
import AppContainer from './Components/AppContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/:searchTerm?" component={AppContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
