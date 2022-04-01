import React, {useState} from "react";

function Filterbar({setFilterData, filterData, attireOptions,dietOptions}){
let priceChosen =[]
let attireChosen=[]
let dietChosen=[]

function priceChosenFilter(event){
    const key = event.target.className
    const value = event.target.value
    if(event.target.checked === true){
      priceChosen.push(value)
      return priceChosen
    } else {
      priceChosen = priceChosen.filter(element => {return element!==value})
      return priceChosen
    }
}

function attireChosenFilter(event){
  const value = event.target.value
  if(event.target.checked === true){
    attireChosen.push(attireOptions[value])
    return attireChosen
  } else {
    attireChosen = attireChosen.filter(element => {return element!==attireOptions[value]})
    return attireChosen
  }
}

function dietChosenFilter(event){
  const value = event.target.value
  if(event.target.checked === true){
    dietChosen.push(dietOptions[value])
    return dietChosen
  } else {
   dietChosen = dietChosen.filter(element => {return element!==dietOptions[value]})
    return dietChosen
  }
}

function filterSubmit(e){
  e.preventDefault()
  console.log("price: "+priceChosen)
  console.log("attire: "+attireChosen)
  console.log("diet: "+dietChosen)
  setFilterData({
    price:priceChosen,
    attire:attireChosen,
    diet:dietChosen,
    })
}

    return (
        <div className="filterbar" id="filterbar">
        <h1>Filter By:</h1>
        <form onSubmit={filterSubmit}>
        <div id="price" className="filterbar">
        <h2>Price</h2>
        <input type="checkbox" value="1" name="price1" className="price" onChange={(e) => {priceChosenFilter(e)}}/>
        <label for="price1">💰</label>
        <br></br>
        <input type="checkbox" value="2" name="price2" className="price" onChange={(e) => (priceChosenFilter(e))}/>
        <label for="price2">💰💰</label>
        <br></br>
        <input type="checkbox" value="3" name="price3" className="price" onChange={(e) => (priceChosenFilter(e))}/>
        <label for="price3">💰💰💰</label>
        <br></br>
        <input type="checkbox" value="4" name="price4" className="price" onChange={(e) => (priceChosenFilter(e))}/>
        <label for="price4">💰💰💰💰</label>
        <br></br>
          </div>
          <br></br>
          <div id="attire" className="filterbar">
        <h2>Attire</h2>
        <input type="checkbox" value="0" name="attire1" onChange={(e) => {attireChosenFilter(e)}}/>
        <label for="attire1">Casual</label>
        <br></br>
        <input type="checkbox" value="1" name="attire2" onChange={(e) => {attireChosenFilter(e)}}/>
        <label for="attire2">Brunch with the Besties</label>
        <br></br>
        <input type="checkbox" value="2" name="attire3" onChange={(e) => {attireChosenFilter(e)}}/>
        <label for="attire3">Date Night</label>
        <br></br>
        <input type="checkbox" value="3" name="attire4" onChange={(e) => {attireChosenFilter(e)}}/>
        <label for="attire4">Special Occasion</label>
        <br></br>
          </div>
          <br></br>
          <div id="diet" className="filterbar">
            <h2>Dietary Considerations</h2>
            <input type="checkbox" value="0" name="diet0" onChange={(e) => {dietChosenFilter(e)}}/>
            <label for="diet0">Vegetarian</label>
            <br></br>
            <input type="checkbox" value="1" name="diet1" onChange={(e) => {dietChosenFilter(e)}}/>
            <label for="diet1">Gluten-Free</label>
            <br></br>
            <input type="checkbox" value="2" name="diet2" onChange={(e) => {dietChosenFilter(e)}}/>
            <label for="diet2">Pescetarian</label>
            <br></br>
            <input type="checkbox" value="3" name="diet3" onChange={(e) => {dietChosenFilter(e)}}/>
            <label for="diet3">Vegan</label>
            <br></br>
            <input type="checkbox" value="4" name="diet4" onChange={(e) => {dietChosenFilter(e)}}/>
            <label for="diet4">Low-Carb</label>
        <br></br>
        </div>
        <button type="submit">Search</button>
        </form>
      </div>
    );;
}

export default Filterbar