import React from "react";
function Filterbar() {

    return (
        <div className="filterbar">
        <h1>Review a Restaurant</h1>
        <form >
        <div id="price">
        <h2>Price</h2>
          <label>
            $
            <input
              type="checkbox"
              name="price1"
              value="price1"
            />
          </label>
          <label>
            $$
            <input
              type="checkbox"
              name="price2"
              value="price2"
            />
          </label>
          <label>
            $$$
            <input
              type="checkbox"
              name="price3"
              value="price3"
            />
          </label>
          <label>
            $$$
            <input
              type="checkbox"
              name="price3"
              value="price3"
            />
          </label>
          </div>
          <br></br>
          <div id="attire">
              
          </div>
          <button type="submit">Add Question</button>
        </form>
      </div>
    );;
}

export default Filterbar