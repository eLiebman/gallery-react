import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import key from './config';

// Components
import AppContainer from './Components/AppContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    }
  }

  componentDidMount() {
    Promise.all([this.loadPhotos('cats'), this.loadPhotos('dogs'), this.loadPhotos('computers')])
      .then(results => this.setState({
            ...this.state,
            cats: results[0],
            dogs: results[1],
            computers: results[2]
          })
      )
  }

  loadPhotos(searchTerm) {
    return (
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchTerm}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then( result =>
        result.data.photos.photo.map( pic => {
            return {
              url: `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`,
              key: pic.id
            }
          })
      )
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="/cats" />
          <Route path="/dogs" />
          <Route path="/computers" />
          <Route path="search/:searchTerm?" component={AppContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
