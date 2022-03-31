import React from "react";

function Review({review}) {
const {id,name,image,price,attire,dietary,rating} = review;

function renderEmojiRating(emoji,attribute){
    let str = ""
    for(let counter= 0; counter < attribute; counter++) {
       str = str+emoji
     }
     return str
}

    return (<div className="review">
    <img src= {(image) ? image : "https://via.placeholder.com/250"} alt ="placeholder" className="review-img"/>
        <div className="data">
            <h1>{name}</h1>
            <h2>{renderEmojiRating("💰",price)}</h2>
            <h2>{renderEmojiRating("🥄",rating)}</h2>
            <p><strong>attire:</strong> {attire}</p>
            <ul> <h2>Friendly for:</h2>
            {dietary.map((category) => <li>{category}</li>)}
            </ul>
           </div>
    </div>)
}


export default Review;

