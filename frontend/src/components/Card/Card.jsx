
import "./Card.css"
import React from 'react'
import { Link } from "react-router-dom";


const Card = ({level}) => {
    return (
        <>
                <Link className="card" to={`/`}>
                    <h4>Prepare By Level</h4>
                    <h2>{level}</h2>
                    <button className="cardBtn">Continue Preparation</button>
                </Link>
        </>
    )
}

export default Card
