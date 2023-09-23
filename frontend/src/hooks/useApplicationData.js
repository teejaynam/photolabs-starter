import React, {useReducer} from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  likedPhotos: [],
};

const actionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  LIKE_PHOTO: 'LIKE_PHOTO',
  UNLIKE_PHOTO: 'UNLIKE_PHOTO',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.payload };
    case actionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null };
    case actionTypes.LIKE_PHOTO:
      if (!state.likedPhotos.includes(action.payload)) {
        return { ...state, likedPhotos: [...state.likedPhotos, action.payload] };
      }
      return state;
    case actionTypes.UNLIKE_PHOTO:
      const updatedLikedPhotos = state.likedPhotos.filter(
        (id) => id !== action.payload
      );
      return { ...state, likedPhotos: updatedLikedPhotos };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: actionTypes.OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  const handleLikePhoto = (photoId) => {
    dispatch({ type: actionTypes.LIKE_PHOTO, payload: photoId });
  };

  const handleUnlikePhoto = (photoId) => {
    dispatch({ type: actionTypes.UNLIKE_PHOTO, payload: photoId });
  };

  return {
    ...state,
    openModal,
    closeModal,
    handleLikePhoto,
    handleUnlikePhoto,
  };
};



export default useApplicationData;
