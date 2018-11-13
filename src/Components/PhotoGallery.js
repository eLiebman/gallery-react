import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({ photos, loading, searchTerm }) => {
  return (
    <div className="photo-container">
      <h2>{
        loading===true
        ?"Loading..."
        :photos&&photos.length
        ?`Results for ${searchTerm}`
        :""
      }</h2>
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
