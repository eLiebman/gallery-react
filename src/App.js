import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import key from './config';

// Components
import AppContainer from './Components/AppContainer';
import Page from './Components/Page';
import ErrorPage from './Components/ErrorPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    }
  }

  componentDidMount() {
    Promise.all([this.loadPhotos('cat'), this.loadPhotos('dog'), this.loadPhotos('fish')])
      .then(results => this.setState({
            ...this.state,
            cats: results[0],
            dogs: results[1],
            fish: results[2]
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

  updateSearchTerm = searchTerm => {
    this.setState({
      ...this.state,
      searchTerm: searchTerm
    });
  }

  setPhotos = searchTerm => {
    if (searchTerm){
      this.setState({
          ...this.state,
          loading: true,
          searchTerm: searchTerm,
          photos: []
        }, () => {
          this.loadPhotos(searchTerm)
            .then(result => this.setState({
              ...this.state,
              photos: result,
              loading: false
            }))
          }
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
          <Route path="/:searchTerm?" component={AppContainer} />
=======
        <Switch>
          <Route exact path="/" render={() => <Page searchTerm="" photos={this.state.photos} search={this.setPhotos} loading={this.state.loading} updateSearchTerm={this.updateSearchTerm} />} />
          <Route path="/cats" render={() => <Page searchTerm="cats" photos={this.state.cats} search={this.setPhotos} loading={this.state.loading} updateSearchTerm={this.updateSearchTerm} />} />
          <Route path="/dogs" render={() => <Page searchTerm="dogs" photos={this.state.dogs} search={this.setPhotos} loading={this.state.loading} updateSearchTerm={this.updateSearchTerm} />} />
          <Route path="/fish" render={() => <Page searchTerm="fish" photos={this.state.fish} search={this.setPhotos} loading={this.state.loading} updateSearchTerm={this.updateSearchTerm} />} />
          <Route path="/search/:searchTerm?" render={() => <Page searchTerm={this.state.searchTerm} photos={this.state.photos} search={this.setPhotos} loading={this.state.loading} updateSearchTerm={this.updateSearchTerm} />} />
          <Route render={() => <ErrorPage search={this.setPhotos} />} />
        </Switch>
>>>>>>> Multi-Route
      </BrowserRouter>
    );
  }
}

export default App;
