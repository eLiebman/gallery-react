import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({ photos, loading, searchTerm }) => {
  return (
    <div className="photo-container">
      <h2>
        { /* Check loading state, display searchTerm in results header */
          loading===true
          ?"Loading..."
          :photos&&photos.length
          ?`Results for ${searchTerm}`
          :""
        }
      </h2>
      <ul>
        { /* Each photo in photos */
          photos
          ?photos.map(photo => <Photo url={photo.url} key={photo.key} />)
          :""
        }
      </ul>
    </div>
  )
}

export default PhotoGallery;
