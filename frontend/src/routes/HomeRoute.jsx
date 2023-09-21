import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from "../mocks/photos.js"

const HomeRoute = ({openModal}) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const isFavPhotoExist = likedPhotos.length > 0 ? true : false;

  const handleLikePhoto = (photoId) => {
    if (!likedPhotos.includes(photoId)) {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const handleUnlikePhoto = (photoId) => {
    const updatedLikedPhotos = likedPhotos.filter((id) => id !== photoId);
    setLikedPhotos(updatedLikedPhotos);
  };
  

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        onLikePhoto={handleLikePhoto}
        onUnlikePhoto={handleUnlikePhoto}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
