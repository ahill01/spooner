import React from "react";
import { NavLink } from "react-router-dom";

function Review({review}) {
const {id,name,image,price,attire,dietary} = review;

    return (<div className="review">
    <a href= {`/reviews/${id}`}>
    <NavLink className="nav_link" exact to={`/reviews/${id}`}>

    <img src= {(image) ? image : "https://via.placeholder.com/250"} alt ="placeholder" className="review-img"/>
        <div className="data">
            <h1>{name}</h1>
            <p>{price}</p>
            <p><strong>attire:</strong> {attire}</p>
            <ul> <h2>Friendly for:</h2>
            {dietary.map((category) => <li>{category}</li>)}
            </ul>
           </div>
        </NavLink>
          </a>
    </div>)
}


export default Review;

