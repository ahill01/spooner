import React from "react";
function Review({review}) {
const {name,image,price,attire,dietary} = review;

    return (<div className="review">
    <img src= {(image) ? image : "https://via.placeholder.com/250"} alt ="placeholder" className="review-img"/>
        <div className="data">
            <h1>{name}</h1>
            <p>{price}</p>
            <p><strong>attire:</strong> {attire}</p>
            <ul> <h2>Friendly for:</h2>
            {dietary.map((category) => <li>{category}</li>)}
            </ul>
         </div>
    </div>)
}

export default Review