import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { likedPhotos, onLikePhoto, onUnlikePhoto, openModal } = props;

  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
        key={photo.id}
        id={photo.id}
        location={photo.location}
        imageSource={photo.urls.regular}
        username={photo.user.username}
        profile={photo.user.profile}
        isLiked={likedPhotos.includes(photo.id)}
        onLike={() => onLikePhoto(photo.id)}
        onUnlike={() => onUnlikePhoto(photo.id)}
        openModal={openModal}
        />
      ))}
    </ul>
  );
};
export default PhotoList;
