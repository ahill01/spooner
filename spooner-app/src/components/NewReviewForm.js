import React, { useState } from'react';

function NewReviewForm() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
    
    alert('You have submitted the form.')
  }

  return (
    <div className="wrapper">
      <h1>New Form</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
           <p> New Review:</p>
           <input new_review="new_review" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default NewReviewForm;