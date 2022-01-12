import React from "react";
import "./Meal.css";
import koshary from "../../assets/images/koshary.png";


export default function Meal(props) {
    return (
        <div className="card">
            
           <img src={props.img} alt="koshary" className="pic" />
           <div className="container">
           <h4>Title: {props.title}</h4> 
           <h5>Description: {props.description} </h5>
           <h5>Price: {props.price} DKK</h5>
           <h5>Location: {props.location} </h5>
           </div>
           
            
           
        </div>
    )
}
