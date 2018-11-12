import React from 'react';
import Photo from './Photo';

const Photos = ({ photos, category }) => {
  return (
    <div className="photo-container">
      <h2>results</h2>
      <ul>
        {
          photos.map(photo => <Photo url={photo.url} key={photo.key} />)
        }
      </ul>
    </div>
  )
}

export default Photos;
