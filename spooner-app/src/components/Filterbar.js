import React from "react";

function Filterbar({setFilterData, attireOptions,priceOptions}){

function filterChange(event){
    const key = event.target.name
    const value = event.target.value

    if(key === "price") {
        return setFilterData((prevObj) => {return {...prevObj, price:(value+1)}});
    } 
    else if(key==="attire"){
       return setFilterData(prevObj => {return {...prevObj, attire:attireOptions[value]}});
    } else {
        return setFilterData(prevObj => {return {...prevObj, diet:value}})
    }
}

    return (
        <div className="filterbar" id="filterbar">
        <h1>Filter By:</h1>
        <form >
        <div id="price" className="filterbar">
        {/* <label htmlFor="price">Price</label> */}
        {/* <select id="price" name="price" onChange={filterChange}> */}
        <input type="checkbox" value="0">💰</input>
        {/* <option value="1">💰💰</option>
        <option value="2">💰💰💰</option>
        <option value="3">💰💰💰💰</option>
        </select> */}
          </div>
          <br></br>
          <div id="attire" className="filterbar">
        <label htmlFor="attire">Attire</label>
        <select id="attire" name="attire" onChange={filterChange}>
            <option value="0">Casual</option>
            <option value="1">Brunch with the Besties</option>
            <option value="2">Date Night</option>
            <option value="3">Special Occasion</option>
        </select>
          </div>
          <br></br>
          <div id="diet" className="filterbar">
            <label htmlFor="diet">Dietary Considerations: </label>
            <input type="type" name="diet" onChange={filterChange}></input> 
          </div>
        </form>
      </div>
    );;
}

export default Filterbar