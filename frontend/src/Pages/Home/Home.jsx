import React from "react";

import Card from "../../components/Card/Card";

import "./Home.css";

const Home = () => {
  const level = ["Basic", "Intermediate", "Advance"];

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
