
import "./Card.css"
import React from 'react'


const Card = ({level}) => {
    const handleClick = () => {
       console.log(level);
      };
    return (
        <>
                <div className="card" onClick={handleClick}>
                    <h4>Prepare By Level</h4>
                    <h2>{level}</h2>
                    <button className="cardBtn">Continue Preparation</button>
                </div>
        </>
    )
}

export default Card
