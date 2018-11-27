import React from "react";

// Page Components
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import NotFound from './NotFound'

// Page template
const Page = ({ search, photos, loading, searchTerm, updateSearchTerm }) => {
  return (
    <div>
      <Header search={search} updateSearchTerm={updateSearchTerm} />
      {
        !searchTerm
        ?""
        :photos.length||loading
        ?<PhotoGallery photos={photos} loading={loading} searchTerm={searchTerm} />
        :<NotFound searchTerm={searchTerm} />
      }
    </div>
  );
}

export default Page;
