import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, toggleShowLikedPhotos }) => {
  return (
    <div className='fav-badge' onClick={toggleShowLikedPhotos}>
      <FavIcon displayAlert={isFavPhotoExist} selected={1}/>
    </div>
  ) 
};

export default FavBadge;