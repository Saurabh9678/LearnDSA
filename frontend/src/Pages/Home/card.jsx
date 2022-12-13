import React, { useState } from 'react'
import "./Card.css"
function Card() {
    const [cards] =useState([
        {
            title: 'Card-1',
            text : `Get your learing start here`
        },
        {
            title: 'Card-2',
            text : `Get your learing start here`
        },
        
    ])
    return (
        <div>
            <section>
                <div className="container">
                    <h1>Prepare</h1>
                    <div className="cards">
                        {
                            cards.map((card, i) => (
                                <div key={i}className="card">
                        <h3>
                            {card.title}
                        </h3>
                        <p>
                            {card.text}
                        </p>
                        <a href="/explore">
                        <button className="btn">Explore</button></a>
                        </div>

                            ))
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
        

export default Card