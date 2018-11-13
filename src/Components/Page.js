import React from "react";

// Page Components
import Header from '../Components/Header';
import PhotoGallery from '../Components/PhotoGallery';

const SearchPage = props => {
  return (
    <div>
      <Header search={props.search} />
      <PhotoGallery photos={props.photos} />
    </div>
  );
}

export default SearchPage;
