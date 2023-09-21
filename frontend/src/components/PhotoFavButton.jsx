import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isLiked, onLike, onUnlike }) {
  const handleClick = () => {
    if (isLiked) {
      onUnlike();
    } else {
      onLike();
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked ? 1 : 0} />
      </div>
    </div>
  );
}

export default PhotoFavButton;