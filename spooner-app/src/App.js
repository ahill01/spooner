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
const [priceFilteredList, setPriceFilteredList] = useState([])
const [attireFilteredList, setAttireFilteredList] = useState([])

// let priceFilteredList
// let attireFilteredList
// let dietFilteredList

const attireOptions = ["Casual", "Brunch with the Besties","Date Night","Special Occasion"]

const dietOptions=["Vegetarian","Gluten-Free","Pescetarian","Vegan","Low-Carb"]

function priceMatch(review){
 return (review.price == filterData.price[0] || review.price == filterData.price[1] || review.price == filterData.price[2] || review.price == filterData.price[3])
}

function attireMatch(review){
  if(filterData.attire.length===0){
    return priceFilteredList
  } else return (review.attire == filterData.attire[0] || review.attire == filterData.attire[1] || review.attire == filterData.attire[2] || review.attire == filterData.attire[3])
}

function attireMatch(review){
  return filterData.attire.includes(review.price)
}

// function dietMatch(review){
//   return filterData.diet.includes(review.diet)
// }

function noFilter(){
  return (filterData.price.length === 0 && filterData.attire.length ===0 && filterData.diet.length===0)
}

useEffect(()=> {setPriceFilteredList(reviews.filter(review => {
 // debugger;
  if(noFilter()) {
    return true} 
  else {return priceMatch(review)}
}
));
}, [filterData,reviews])

useEffect(()=> {setAttireFilteredList(priceFilteredList.filter(review => {
  if(noFilter()) {
    return true} 
  else {return attireMatch(review)}
}
))}, [priceFilteredList])

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
        <ReviewsList reviews={(attireFilteredList===undefined) ? attireFilteredList : reviews} />
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
