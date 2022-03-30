import Navbar from "./components/Navbar"
import ReviewsList from "./components/ReviewsList"
import './App.css';
import React, {useState, useEffect} from "react"
import Filterbar from "./components/Filterbar";

function App() {
const [reviews, setReviews] = useState([])
const [filterData, setFilterData]=useState({
  price:"",
  attire:"",
  diet:"",
})

const attireOptions = ["Casual", "Brunch with the Besties","Date Night","Special Occasion"]
    
const priceOptions = ["$","$$","$$$","$$$$"]

// const filteredList = reviews.filter(review => {review.})

useEffect(() => {
  fetch("http://localhost:4000/restaurants")
  .then(res => res.json())
  .then(reviewsArr => setReviews(reviewsArr))
},[])

  return (
    <div className="App">
    <Navbar/>
    <Filterbar setFilterData={setFilterData} attireOptions ={attireOptions} priceOptions={priceOptions}/>
   <ReviewsList reviews={reviews} />
    </div>
  );
}  

export default App;
