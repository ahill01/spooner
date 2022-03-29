import React from 'react';
import Review from "./Review"

function ReviewsList ({reviews}){
return (
       <div className="review-list"> 
       {reviews.map((review) => <Review key={review.id} review = {review}/>)}
        </div>
)}

export default ReviewsList;