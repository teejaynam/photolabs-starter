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
    topics
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
      />
      {isModalOpen && (
        <PhotoDetailsModal 
          closeModal={closeModal} 
          photo={selectedPhoto}
          photos={photos}
          likedPhotos={likedPhotos}
          onLikePhoto={handleLikePhoto} 
          onUnlikePhoto={handleUnlikePhoto} 
        />
      )}
    </div>
  );
};

export default App;
