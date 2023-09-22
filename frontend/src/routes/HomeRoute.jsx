import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from "../mocks/photos.js"

const HomeRoute = (props) => {
  const {openModal, likedPhotos, onLikePhoto, onUnlikePhoto} = props;

  const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        onLikePhoto={onLikePhoto}
        onUnlikePhoto={onUnlikePhoto}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
