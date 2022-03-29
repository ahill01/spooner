import Navbar from "./components/Navbar"
import ReviewsList from "./components/ReviewsList"
import './App.css';
import React, {useState, useEffect} from "react"
import ReviewsList from "./ReviewsList"

function App() {
const [reviews, setReviews] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/restaurants")
  .then(res => res.json())
  .then(reviewsArr => setReviews(reviewsArr))
},[])

  return (
    <div className="App">
    <Navbar/>
   <ReviewsList reviews={reviews}/>
    </div>
  );
}

export default App;
