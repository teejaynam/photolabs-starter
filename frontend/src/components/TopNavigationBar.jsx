import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ isFavPhotoExist, topics, fetchPhotosByTopic, toggleShowLikedPhotos, handleLogoClick }) => {
  const logoClick = () => {
    handleLogoClick();
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={logoClick}>PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} toggleShowLikedPhotos={toggleShowLikedPhotos}/>
    </div>
  )
}

export default TopNavigation;