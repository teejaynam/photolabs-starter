import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';


const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  }

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  }

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
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {isModalOpen && (
        <PhotoDetailsModal 
          closeModal={closeModal} 
          photo={selectedPhoto}
          photos={photos}
          onLikePhoto={handleLikePhoto} 
          onUnlikePhoto={handleUnlikePhoto} 
        />
      )}
    </div>
  );
};

export default App;
