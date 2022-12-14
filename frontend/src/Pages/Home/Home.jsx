import React, { useEffect } from "react";
import { getAllContents } from "../../actions/contentActions";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import "./Home.css"

const Home = () => {
  const dispatch = useDispatch();
  const level = ["Basic", "Intermediate", "Advance"];
  useEffect(() => {
    dispatch(getAllContents());
  }, [dispatch]);

  return (
    <>
      <div className="homeContainer">
        {level.map((l, i) => (
          <Card key={i} level={l} />
        ))}
      </div>
    </>
  );
};

export default Home;
