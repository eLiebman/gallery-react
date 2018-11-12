import React from "react";

// Page Components
import Header from './Header';
import PhotoGallery from './PhotoGallery';

const SearchPage = (props, match) => {
  return (
    <div>
      <Header />
      {/*
        props.match.params.searchTerm
        ?<PhotoGallery photos={props.search(props.match.params.searchTerm)} />
        :""
      */}
    </div>
  );
}

export default SearchPage;
