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
  dietary:[],
})
const [filteredList, setFilteredList] = useState([])
// const [attireFilteredList, setAttireFilteredList] = useState([])

// let priceFilteredList
// let attireFilteredList
// let dietFilteredList

const attireOptions = ["Casual", "Brunch with the Besties","Date Night","Special Occasion"]

const dietOptions=["Vegetarian","Gluten-Free","Pescetarian","Vegan","Low-Carb"]

function noFilter(){
  return (filterData.price.length === 0 && filterData.attire.length ===0 && filterData.dietary.length===0)
}

function priceMatch(review){
if(filterData.price.length===0) {
  return true}
  else {
    return (review.price == filterData.price[0] || review.price == filterData.price[1] || review.price == filterData.price[2] || review.price == filterData.price[3])
  }
}

function attireMatch(review){
  if(filterData.attire.length===0){
    return true
  } else return (review.attire == filterData.attire[0] || review.attire == filterData.attire[1] || review.attire == filterData.attire[2] || review.attire == filterData.attire[3])
}

function dietaryMatch(review){
  if(filterData.dietary.length===0){
    return true
  } else {
    return (review.dietary.includes(filterData.dietary[0]) || review.dietary.includes(filterData.dietary[1]) || review.dietary.includes(filterData.dietary[2]) || review.dietary.includes(filterData.dietary[3]) || review.dietary.includes(filterData.dietary[4]))
  }
}

// function dietMatch(review){
//   return filterData.diet.includes(review.diet)
// }

useEffect(()=> {
  //priceFiltered
let priceFiltered = []

priceFiltered = reviews.filter(review => {
  return priceMatch(review)
  }
)
console.log(priceFiltered)

//attireFiltered

let attireFiltered = []

attireFiltered = priceFiltered.filter(review => attireMatch(review))
console.log(attireFiltered)
//dietFiltered 

let dietFiltered=[]

dietFiltered = attireFiltered.filter(review => dietaryMatch(review))

  console.log(noFilter())

  setFilteredList(dietFiltered);
}, [filterData])


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
        <ReviewsList reviews={(filteredList===undefined || noFilter()) ? reviews : filteredList} />
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
