import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isLiked, onLike, onUnlike, onClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (isLiked) {
      onUnlike();
    } else {
      onLike();
    }
    if (onClick) {
      onClick();
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