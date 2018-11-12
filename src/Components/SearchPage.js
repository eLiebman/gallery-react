import React from "react";

// Page Components
import Header from './Header';
import PhotoGallery from './PhotoGallery';

const SearchPage = props => {
  return (
    <div>
      <Header />
      {
        props.photos.length
        ?<PhotoGallery photos={props.photos} />
        :""
      }
    </div>
  );
}

export default SearchPage;
