import React from "react";
import { Link } from "react-router-dom";
import "./TopicCard.css";

const TopicCard = ({content}) => {
  return (
    <Link className="topicCard" to={`/content/${content._id}`}>
      <h2>{content.title}</h2>
      <h5>Difficulty: {content.difficulty}</h5>
      <h6>Topic: {content.topic}</h6>
      <button className="solve">Solve</button>
    </Link>
  );
};

export default TopicCard;
