/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, {Component} from "react";
import PropTypes from "prop-types";
import "./AddMeal.css";
import formFoto from "../../assets/images/formFoto.png";

export const AddMeal = () =>  {
const [data,setData] = React.useState({});

function handleChange (event) {
setData({...data,[event.target.name] : event.target.value})
}

const postData = () => {fetch('/api/meals/', {
  method: 'POST',
headers: {'Content-Type': 'application/json',            },  
          body: JSON.stringify(data),        })           
           .then(response => response.json())           
            .then(data => {              
                console.log('Success:', data);            })       
                     .catch((error) => {             
                          console.error('Error:', error);            });    }
  return (
    <section className="test-component">
      <div className="headers">
      <h1>Add your favorite meal!</h1>
      <h3>Share your Favorite meals with friends and family</h3>
      </div>
      
      <div className="formPage">
      
      <form className="theForm" onSubmit={postData}>

        <div className="inputBox">
          <label>Title </label>
          <input type="text" name="title" className="input" value={data.title} onChange={handleChange}></input>
        </div>
        <div className="inputBox">
          <label>Description  </label>
          <textarea type="text" name="description" className="input" value={data.description} onChange={handleChange}></textarea>
        </div>
        <div className="inputBox">
          <label>Price  </label>
          <input type="text" name="price" className="input" value={data.price} onChange={handleChange}></input>
        </div>
        <div className="inputBox">
          <label>Location  </label>
          <input type="text" name="location" className="input" value={data.location} onChange={handleChange}></input>
        </div>
        <div className="inputBox">
          <label>Reservation Date  </label>
          <input type="date" name="time" className="input" value={data.time} onChange={handleChange}></input>
        </div>
        <div className="inputBox">
          <label>Number of guests  </label>
          <input type="text" name="max_reservations" className="input" value={data.max_reservations} onChange={handleChange}></input>
        </div>
        <div className="inputBox">
          <label>Photo Link </label>
          <input type="text" name="Photo" className="input" value={data.Photo} onChange={handleChange}></input>
        </div>

        
        <button type="submit" className="btnForm">Add Meal</button>
      </form>
      <img src={formFoto} alt="add your meal" class="formFoto" />
      </div>
     
      <p>Choose between the meals</p>
    </section>
  );
}

 
