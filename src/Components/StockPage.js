import React from 'react';

// StockPage Components
import Header from './Header';
import PhotoGallery from './PhotoGallery';

const StockPage = ({ photos }) => {
  return (
    <div>
      <Header />
      <PhotoGallery photos={photos} />
    </div>
  )
}

export default StockPage;
