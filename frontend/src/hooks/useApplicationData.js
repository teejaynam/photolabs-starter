import React, {useReducer, useEffect} from 'react';
//import photos from "../mocks/photos.js"
import topics from "../mocks/topics.js"

const apiURLPhotos = 'http://localhost:8001/api/photos'
const apiURLTopics = 'http://localhost:8001/api/topics'


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  likedPhotos: [],
  photos: [],
  topics: []
};

const actionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  LIKE_PHOTO: 'LIKE_PHOTO',
  UNLIKE_PHOTO: 'UNLIKE_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
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
    case actionTypes.SET_PHOTO_DATA:
      return {...state, photos: action.payload};
    case actionTypes.SET_TOPIC_DATA:
      return {...state, topics: action.payload};
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(apiURLPhotos)
      .then((res) => res.json())
      .then((data) => {dispatch({ type: 'SET_PHOTO_DATA', payload: data})})
  }, [])

  useEffect(() => {
    fetch(apiURLTopics)
      .then((res) => res.json())
      .then((data) => {dispatch({ type: 'SET_TOPIC_DATA', payload: data})})
  }, [])

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
