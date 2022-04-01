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

  setNewReview({...newReview, [key]:value})
}

function handleDietaryChange(e){
  const value = e.target.value
  let dietaryArr = newDietary

  console.log("dietary arr "+dietaryArr)
  console.log("value " + value)

    if(e.target.checked === true){
     dietaryArr.push(value)
     setNewDietary(dietaryArr) 

    } else {
     dietaryArr = dietaryArr.filter(element => {return element!==value})
    setNewDietary(dietaryArr)
    }

}


  function handleSubmit(e) {
    e.preventDefault();
  fetch("http://localhost:4000/restaurants",{
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    
  },
body: JSON.stringify({...newReview,dietary:newDietary})
  })

  window.alert("Review Submitted! Thank you!");
}
  return (
     
    <div className="wrapper"> 

    <form onSubmit ={handleSubmit}>
      <h1 style={{color: "black"}}>New Review Form</h1>
      <p style={{color: "#e30b5d"}}>Down below let us know how your experience was at the restaurant you went to. Share that hole-in-the-wall spot that you know others will love too! Or that spot with the two day old bread let others know to avoid it. Whatever your experience was we want to know about it. Prices too high? Chose from the drop-down. You licked your spoon clean?! Choose from the spoon list! </p>

     
      <fieldset>
           <p> User Name:</p>
           <input name="author" onChange={handleChange}/>

           <p> Restaurant Name:</p>
           <input name="name" onChange={handleChange}/>

           <p>Price:</p>            
            <select name="price" onChange={handleChange} >        
            <option value="1">💰</option>
              <option value="2">💰💰</option>
              <option value="3">💰💰💰</option>
              <option value="4">💰💰💰💰</option>
            </select>
                      
           
           <p>Dietary Needs:</p>            
            <input type="checkbox" value="Vegetarian" name="diet0" className="dietary" onChange={(e) => {handleDietaryChange(e)}}/>
            <label for="diet0">Vegetarian</label>
            <br></br>
            <input type="checkbox" value="Gluten-Free" name="diet1" className="dietary" onChange={(e) => {handleDietaryChange(e)}}/>
            <label for="diet">Gluten-Free</label>
            <br></br>
            <input type="checkbox" value="Pescetarian" name="diet2" className="dietary" onChange={(e) => {handleDietaryChange(e)}}/>
            <label for="diet">Pescetarian</label>
            <br></br>
            <input type="checkbox" value="Vegan" name="diet3" className="dietary" onChange={(e) => {handleDietaryChange(e)}}/>
            <label for="diet3">Vegan</label>
            <br></br>
            <input type="checkbox" value="Low-Carb" name="diet4" className="dietary" onChange={(e) => {handleDietaryChange(e)}}/>
            <label for="diet4">Low-Carb</label>
            
           
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