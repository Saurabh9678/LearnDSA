import "./Card.css"
export default function Card() {
    const handleClick = event => {
        console.log("Card Clicked");
      };
    return (
        <>
                <div className="card" onClick={handleClick}>
                    <h4>Prepare By Topics</h4>
                    <h2>Java</h2>
                    <button className="btn">Continue Preparation</button>
                </div>
        </>
    )
}
