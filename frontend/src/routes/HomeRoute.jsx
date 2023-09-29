import React, {useState} from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = (props) => {
  const {openModal, likedPhotos, onLikePhoto, onUnlikePhoto, photos, topics, fetchPhotosByTopic} = props;

  const isFavPhotoExist = likedPhotos.length > 0;

  const [showLikedPhotos, setShowLikedPhotos] = useState(false);

  const toggleShowLikedPhotos = () => {
    setShowLikedPhotos(!showLikedPhotos);
  }

  const filteredPhotos = showLikedPhotos
  ? photos.filter((photo) => likedPhotos.includes(photo.id))
  : photos;

  const handleLogoClick = () => {
    setShowLikedPhotos(false);
  }

  return (
    <div className="home-route">
      <TopNavigationBar 
        isFavPhotoExist={isFavPhotoExist} 
        topics={topics} 
        fetchPhotosByTopic={fetchPhotosByTopic} 
        toggleShowLikedPhotos={toggleShowLikedPhotos}
        handleLogoClick={handleLogoClick}
      />
      <PhotoList
        photos={filteredPhotos}
        likedPhotos={likedPhotos}
        onLikePhoto={onLikePhoto}
        onUnlikePhoto={onUnlikePhoto}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
