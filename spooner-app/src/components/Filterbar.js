import React from "react";

function Filterbar({setFilterData, filterData, attireOptions}){
const priceChosen = []

function filterChange(event){
    const key = event.target.className
    const value = event.target.value
    priceChosen.push(value)
    console.log(priceChosen)
}

    return (
        <div className="filterbar" id="filterbar">
        <h1>Filter By:</h1>
        <form >
        <div id="price" className="filterbar">
        <h2>Price</h2>
        <input type="checkbox" value="1" name="price1" className="price" onSelect={filterChange}/>
        <label for="price1">💰</label>
        <br></br>
        <input type="checkbox" value="2" name="price2" className="price" onSelect={filterChange}/>
        <label for="price2">💰💰</label>
        <br></br>
        <input type="checkbox" value="3" name="price3" className="price" onSelect={filterChange}/>
        <label for="price3">💰💰💰</label>
        <br></br>
        <input type="checkbox" value="4" name="price4" className="price" onSelect={filterChange}/>
        <label for="price4">💰💰💰💰</label>
        <br></br>
          </div>
          <br></br>
          <div id="attire" className="filterbar">
        <h2>Attire</h2>
        <input type="checkbox" value="1" name="attire1" onChange={filterChange}/>
        <label for="attire1">Casual</label>
        <br></br>
        <input type="checkbox" value="2" name="attire2" onChange={filterChange}/>
        <label for="attire2">Brunch with the Beties</label>
        <br></br>
        <input type="checkbox" value="3" name="attire3" onChange={filterChange}/>
        <label for="attire3">Date Night</label>
        <br></br>
        <input type="checkbox" value="4" name="attire4" onChange={filterChange}/>
        <label for="attire4">Special Occasion</label>
        <br></br>
          </div>
          <br></br>
          <div id="diet" className="filterbar">
            <h2>Dietary Considerations</h2>
            <input type="checkbox" value="0" name="diet0" onChange={filterChange}/>
            <label for="diet0">Vegetarian</label>
            <br></br>
            <input type="checkbox" value="1" name="diet1" onChange={filterChange}/>
            <label for="diet1">Gluten-Free</label>
            <br></br>
            <input type="checkbox" value="2" name="diet2" onChange={filterChange}/>
            <label for="diet2">Pescetarian</label>
            <br></br>
            <input type="checkbox" value="3" name="diet3" onChange={filterChange}/>
            <label for="diet3">Vegan</label>
            <br></br>
            <input type="checkbox" value="4" name="diet4" onChange={filterChange}/>
            <label for="diet4">Low-Carb</label>
        <br></br>
        </div>
        </form>
      </div>
    );;
}

export default Filterbar