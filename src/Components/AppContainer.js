import React, { Component } from 'react';
import axios from 'axios';
import key from '../config';

// Components
import Search from './Search';
import Nav from './Nav';
import Photos from './Photos';
import NotFound from './NotFound';

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      searchTerm: this.props.match.params.searchTerm
    };
  }

  componentDidMount() {
    if(this.state.searchTerm) {
      this.search(this.state.searchTerm);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.searchTerm !== this.props.match.params.searchTerm && nextProps.match.params.searchTerm !== undefined) {
      this.search(nextProps.match.params.searchTerm);
    }
  }

  search(searchTerm) {
    this.setState({loading: true}, () => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchTerm}&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then( result =>
          result.data.photos.photo.map( pic => {
              return {
                url: `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`,
                key: pic.id
              }
            })
        ).then( result => this.setState({ photos: result, searchTerm: searchTerm, loading: false }))
        .catch(error => console.log(error));
        if (`/${searchTerm}` !== this.props.history.location.pathname){
          this.props.history.push(`/${searchTerm}`)
        }
    })
  }

  render() {
    return (
      <div className="App">
        <Search search={this.search.bind(this)} />
        <Nav />
        {
          this.props.location.pathname === "/"
          ?""
          :this.state.loading
          ?"Loading..."
          :this.state.photos.length
          ?<Photos photos={this.state.photos} />
          :<NotFound />
        }
      </div>
    );
  }
}

export default AppContainer;
