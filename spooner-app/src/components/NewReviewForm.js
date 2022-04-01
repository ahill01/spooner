import React, { useState } from'react';


function NewReviewForm() {
  const [newReview, setNewReview] = useState({
    name:"",
    price:"",
    attire:"",
    rating:""
  })

  const[newDietary, setNewDietary] = useState([])
  // const [newStar, setNewStar] =useState("")
  // const[newResturant, setNewResturant] =useState("")
  // const[newPrice, setNewPrice] =useState("")
  // const[newDietary, setNewDietary] =useState("")
  // const[newAttire, setNewAttire] =useState("")
  // const handleChange = (event) => {
  //   setMyStar(event.target.value)   
  // }
  

function handleChange(e){
  const key = e.target.name
  const value = e.target.value

  const dietaryArr = newReview.dietary
  if(key==="dietary"){
    setNewReview({...newReview, [key]:(dietaryArr.push(value))})
  } else {
  setNewReview({...newReview, [key]:value})
  console.log(newReview)
  }
}

 


  function handleSubmit(e) {
    e.preventDefault();
  fetch("http://localhost:4000/restaurants",{
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    
  },
body: JSON.stringify({...newReview,dietary:[newDietary]})
  })

  window.alert("Review Submitted! Thank you!");
}
  return (
     
    <div className="wrapper"> 

    <form onSubmit ={handleSubmit}>
      <h1>New Review Form</h1>

     
      <fieldset>
           <p>Name:</p>
           <input name="name" />
           <p> Restaurant Name:</p>
           
           <input name="Price" />
           <p>Price:</p>            
            <select name="price" onChange={handleChange} >        
            <option value="1">💰</option>
              <option value="2">💰💰</option>
              <option value="3">💰💰💰</option>
              <option value="4">💰💰💰💰</option>
            </select>
                      
           
           <p>Dietary Needs:</p>            
            <select name="dietary" onChange={handleChange} >       
            <option value="Vegetarian">Vegetarian </option>
              <option value="Gluten Free">Gluten Free </option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="Vegan">Vegan </option>
              <option value="Low-carb">Low-Carb</option>
            </select>
            
           
           <p>Attire:</p>            
            <select name="attire" onChange={handleChange} >        
            <option value="Casual">Casual </option>
              <option value="Brunch with the Besties">Brunch with the Besties </option>
              <option value="Date Night">Date Night</option>
              <option value="Special Occasion">Special Occasion </option>
              </select>

       <p>Food Rating:</p>
            
      <select name="rating" onChange={handleChange} >       
      <option value="1">🥄</option>
        <option value="2">🥄🥄</option>
        <option value="3">🥄🥄🥄</option>
        <option value="4">🥄🥄🥄🥄</option>
        <option value="5">🥄🥄🥄🥄</option>
      </select>

    <button type="submit">Submit</button>

    </fieldset>
      
    </form>
    </div>
    


     )
  } 

export default NewReviewForm;