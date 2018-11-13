import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import key from './config';

// Components
import Page from './Components/Page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    }
  }

  componentDidMount() {
    Promise.all([this.loadPhotos('cat'), this.loadPhotos('dog'), this.loadPhotos('computer')])
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

  setPhotos = (searchTerm) => {
    this.loadPhotos(searchTerm)
      .then(result => this.setState({
        ...this.state,
        photos: result
      }))
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Page photos={this.state.photos} search={this.setPhotos}/>} />
          <Route path="/cats" render={() => <Page photos={this.state.cats} search={this.setPhotos} />} />
          <Route path="/dogs" render={() => <Page photos={this.state.dogs} search={this.setPhotos} />} />
          <Route path="/computers" render={() => <Page photos={this.state.computers} search={this.setPhotos} />} />
          <Route path="/search/:searchTerm?" render={() => <Page search={this.setPhotos} photos={this.state.photos}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
