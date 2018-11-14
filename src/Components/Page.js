import React from "react";

// Page Components
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import NotFound from './NotFound'

const Page = ({ search, photos, loading, searchTerm }) => {
  return (
    <div>
      <Header search={search} />
      {
        !searchTerm
        ?""
        :photos.length||loading
        ?<PhotoGallery photos={photos} loading={loading} searchTerm={searchTerm} />
        :<NotFound />
      }
    </div>
  );
}

export default Page;
