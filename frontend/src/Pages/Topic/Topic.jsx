import { getAllContents } from "../../actions/contentActions";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TopicCard from "../../components/TopicCard/TopicCard";
import "./Topic.css";

const Topic = () => {
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.contents);
  useEffect(() => {
    dispatch(getAllContents());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="topicCardContainer">
        {contents && contents.map(content => (
          <TopicCard key={content._id} content= {content}/>
        ))}
      </div>
    </Fragment>
  );
};

export default Topic;
