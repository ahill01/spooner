import React, { useState } from'react';


function NewReviewForm() {
  const [newReview, setNewReview] = useState({name:"",price:"",attire:"",rating:""})
  const [myStar, setMyStar] =useState("")
  const[myResturant, setMyResturant] =useState("")
  const[myPrice, setMyPrice] =useState("")
  const[myDietary, setMyDietary] =useState("")
  const[myAttire, setMyAttire] =useState("")
  const[myReview, setMyReview] =useState("")

  // const handleChange = (event) => {
  //   setMyStar(event.target.value)   
  // }
  

function handleChange(e){
  const key = e.target.name
  const value = e.target.value
  // setFormData({...formData, [key]:value})
  // console.log(formData)
}

 


  function handleSubmit(e) {
    e.preventDefault();

    window.alert("Review Submitted! Thank you!");
  
  
  fetch("http://localhost:4000/restaurants",{
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    
  },
body: JSON.stringify(
)

  })}
  return (
     
    <div className="wrapper"> 

    <form onSubmit ={handleSubmit}>
      <h1>New Review Form</h1>

     
      <fieldset>
         <label>
           <p>Name:</p>
           <input name="name" />
           <p> Restaurant Name:</p>
           
           <input name="Price" />
           <p>Price:</p>            
            <select value={setMyPrice} onChange={e => setMyPrice(e.target.value)} >        
            <option value="💰">💰</option>
              <option value="💰💰">💰💰</option>
              <option value="💰💰💰">💰💰💰</option>
              <option value="💰💰💰💰">💰💰💰💰</option>
            </select>
                      
           
           <p>Dietary Needs:</p>            
            <select value={myStar} onChange={e => setMyDietary(e.target.value)} >       
            <option value="Vegetarian ">Vegetarian </option>
              <option value="Gluten Free ">Gluten Free </option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="Vegan">Vegan </option>
              <option value="Low-carb">Low-Carb</option>
            </select>
            
           
           <p>Attire:</p>            
            <select value={myAttire} onChange={e => setMyAttire(e.target.value)} >        
            <option value="Casual ">Casual </option>
              <option value="Brunch with the Besties ">Brunch with the Besties </option>
              <option value="Date Night">Date Night</option>
              <option value="Special Occasion">Special Occasion </option>
              </select>

           <p> New Review:</p>
           <input new_review="new_review" />
         </label>
       <p>Food Rating:</p>
            
      <select value={myStar} onChange={e => setMyReview(e.target.value)} >       
      <option value="🥄">🥄</option>
        <option value="🥄🥄">🥄🥄</option>
        <option value="🥄🥄🥄">🥄🥄🥄</option>
        <option value="🥄🥄🥄🥄">🥄🥄🥄🥄</option>
      </select>

    <button type="submit">Submit</button>

    </fieldset>
      
    </form>
    </div>
    


     )
  } 

export default NewReviewForm;