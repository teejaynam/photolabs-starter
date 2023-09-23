import React, {useState} from 'react';

const useApplicationData = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  const handleLikePhoto = (photoId) => {
    if (!likedPhotos.includes(photoId)) {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const handleUnlikePhoto = (photoId) => {
    const updatedLikedPhotos = likedPhotos.filter((id) => id !== photoId);
    setLikedPhotos(updatedLikedPhotos);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    likedPhotos,
    handleLikePhoto,
    handleUnlikePhoto,
  };
};

export default useApplicationData;
