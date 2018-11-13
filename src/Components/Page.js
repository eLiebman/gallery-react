import React from "react";

// Page Components
import Header from '../Components/Header';
import PhotoGallery from '../Components/PhotoGallery';

const Page = ({ search, photos, loading, searchTerm }) => {
  return (
    <div>
      <Header search={search} />
      <PhotoGallery photos={photos} loading={loading} searchTerm={searchTerm} />
    </div>
  );
}

export default Page;
