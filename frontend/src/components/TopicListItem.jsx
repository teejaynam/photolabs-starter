import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const {id, title, fetchPhotosByTopic} = props;

  const handleTopClick = () => {
    fetchPhotosByTopic(id);
  }

  return (
    <div className="topic-list__item" onClick={handleTopClick}>
        <span className="topic-list__item">{title}</span>
    </div>
  );
};

export default TopicListItem;
