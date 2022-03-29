import React from "react";

function Review() {
    return (<div className="review">
    <img src="https://via.placeholder.com/250" alt ="placeholder" className="review-img"/>
        <div className="data">
            <h1>Name</h1>
            <p>Price</p>
            <p>Attire</p>
            <ul> <h2>Dietary:</h2>
                <li>Vegetarian</li>
                <li>Gluten-Free</li>
            </ul>
         </div>
    </div>)
}

export default Review