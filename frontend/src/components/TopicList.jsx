import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {fetchPhotosByTopic} = props;
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
      ))}
    </div>
  );
};
export default TopicList;
