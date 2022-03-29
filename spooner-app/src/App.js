import './App.css';
import React, {useState, useEffect} from "react"
import Header from "./Header"
import ReviewsList from "./ReviewsList"
import react from 'react';

function App() {
const [reviews, setReviews] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/restaurants")
  .then(res => res.json())
  .then(reviewsArr => setReviews(reviewsArr))
},[])

  return (
    <div className="App">
    <Header/>
    <ReviewsList reviews={reviews}/>
    </div>
  );
}

export default App;
