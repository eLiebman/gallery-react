import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({ photos }) => {
  return (
    <div className="photo-container">
      <h2>results</h2>
      <ul>
        {
          photos
          ?photos.map(photo => <Photo url={photo.url} key={photo.key} />)
          :""
        }
      </ul>
    </div>
  )
}

export default PhotoGallery;
