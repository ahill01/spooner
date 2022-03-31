import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import ReviewsList from "./components/ReviewsList"
import './App.css';
import React, {useState, useEffect} from "react"
import Filterbar from "./components/Filterbar";
import Review from "./components/Review";
import NewReviewForm from "./components/NewReviewForm";
import LandingPage from "./components/LandingPage";

function App() {
const [reviews, setReviews] = useState([])
const [filterData, setFilterData]=useState({
  price:[],
  attire:[],
  diet:[],
})

const attireOptions = ["Casual", "Brunch with the Besties","Date Night","Special Occasion"]

const dietOptions=["Vegetarian","Gluten-Free","Pescetarian","Vegan","Low-Carb"]

function priceMatch(review){
  return filterData.price.includes(review.price)
}

function attireMatch(review){
  return filterData.attire.includes(review.price)
}

function noFilter(){
  return (filterData.attire.length === 0 && filterData.attire.length ===0 && filterData.diet.length===0)
}


const filteredList =  reviews.filter(review => {
  if(noFilter()) {
    return true} 
  else { return (review.price === filterData.price[0])}
}
)

useEffect(() => {
  fetch("http://localhost:4000/restaurants")
  .then(res => res.json())
  .then(reviewsArr => setReviews(reviewsArr))
},[])

  return (
    <div className="App">
    
    <Switch>
    
    <Route exact path="/">
      <Navbar/>  
      <LandingPage />
        </Route>
        <Route exact path="/reviews">
        <Navbar/>
        <Filterbar setFilterData={setFilterData} filterData={filterData} attireOptions ={attireOptions} dietOptions={dietOptions}/>
        <ReviewsList reviews={filteredList} />
        </Route>
        <Route exact path="/new">
        <Navbar/>
          <NewReviewForm />
        </Route>
        <Route exact path="/reviews/:id">
        <Navbar/>
          <Review />
        </Route>
      </Switch>

   
    </div>
  );
}  

export default App;
