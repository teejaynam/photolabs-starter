import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    likedPhotos,
    handleLikePhoto,
    handleUnlikePhoto,
    photos,
    topics,
    fetchPhotosByTopic
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute 
        openModal={openModal}
        likedPhotos={likedPhotos} 
        onLikePhoto={handleLikePhoto} 
        onUnlikePhoto={handleUnlikePhoto}
        photos={photos} 
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {isModalOpen && (
        <PhotoDetailsModal 
          closeModal={closeModal} 
          photo={selectedPhoto}
          photos={photos}
          likedPhotos={likedPhotos}
          onLikePhoto={handleLikePhoto} 
          onUnlikePhoto={handleUnlikePhoto} 
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default App;
