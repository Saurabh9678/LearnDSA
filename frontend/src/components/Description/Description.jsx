import React, { useEffect } from "react";
import "./Description.css";
import { useParams } from "react-router-dom";
import { getContentDetails } from "../../actions/contentActions";
import { useSelector, useDispatch } from "react-redux";

const Description = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.contentDetails);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getContentDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="DescriptionContainer">
        <div className="DescriptionNav">
          <div>
            <a href="/">Description</a>
          </div>
          <div>
            <a href="/">Solution</a>
          </div>
        </div>
        <div className="Description">
          <h2>{content.title}</h2>
          <br />
          <p>
            {content.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
