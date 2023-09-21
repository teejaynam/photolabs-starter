import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile, isLiked, onLike, onUnlike, openModal } = props;

  const handleClick = () => {
    openModal(id);
  }

  return (
    <div className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton
        isLiked={isLiked}
        onLike={onLike}
        onUnlike={onUnlike}
      />
      <img src={imageSource} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt={`${username}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div>
            <span className="">{username}</span>
          </div>
          <div>
            <span className="photo-list__user-location">
              {location.city}, {location.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
