import React, {useState} from 'react';
import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ( props ) => {
  const {closeModal, photo, photos, likedPhotos, onLikePhoto, onUnlikePhoto } = props;
  const selectedPhoto = photos.find((item) => item.id === photo);
  const {similar_photos} = selectedPhoto;


  const handleClose = () => {
    closeModal();
  }


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        {selectedPhoto && (
          <>
            
            <div className='photo-details-modal__top-bar'>
              <div>
                <PhotoFavButton
                  isLiked={likedPhotos.includes(selectedPhoto.id)}
                  onLike={() => onLikePhoto(selectedPhoto.id)}
                  onUnlike={() => onUnlikePhoto(selectedPhoto.id)}
                />
                <img src={selectedPhoto.urls.regular} className="photo-details-modal__image"/>
              </div>
            </div>

            <div className='photo-details-modal__top-bar'>
            <div className="photo-list__user-details">

              <img
                src={selectedPhoto.user.profile}
                className="photo-list__user-profile"
              />
              <div className="photo-list__user-info">
                <div>
                  <span className="photo-details-modal__photographer-details">{selectedPhoto.user.username}</span>
                  </div>
                  <div>
                  <span className="photo-list__user-location photo-details-modal__photographer-details">
                    {selectedPhoto.location.city}, {selectedPhoto.location.country}
                   </span>
                </div>
              </div>
            </div>
            </div>

          </>
        )}
      <div className='photo-details-modal__header photo-details-modal__top-bar'>Similar Photos</div>
      
      <div className='photo-details-modal__images photo-details-modal__top-bar'>
        {similar_photos && (
          <>
            {Object.keys(similar_photos).map((key) => (
              <PhotoList
                key={key}
                photos={[similar_photos[key]]}
                likedPhotos={likedPhotos}
                onLikePhoto={onLikePhoto}
                onUnlikePhoto={onUnlikePhoto}
              />
            ))}
          </>
        )}
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
