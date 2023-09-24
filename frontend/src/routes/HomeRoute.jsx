import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = (props) => {
  const {openModal, likedPhotos, onLikePhoto, onUnlikePhoto, photos, topics, fetchPhotosByTopic} = props;

  const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
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
