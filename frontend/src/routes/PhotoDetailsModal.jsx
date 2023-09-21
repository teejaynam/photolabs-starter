import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ( props ) => {
  const {closeModal, photo, photos, onLikePhoto, onUnlikePhoto} = props;
  const selectedPhoto = photos.find((item) => item.id === photo);

  const handleClose = () => {
    closeModal();
  }


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && (
        <div className="photo-details-modal__image">
          <PhotoListItem
            id={selectedPhoto.id}
            location={selectedPhoto.location}
            imageSource={selectedPhoto.urls.regular}
            username={selectedPhoto.user.username}
            profile={selectedPhoto.user.profile}
            isLiked={selectedPhoto.isLiked} 
            onLike={onLikePhoto}
            onUnlike={onUnlikePhoto}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
