import React from "react";
import "./Meals.css";


export default function Meal(props) {
    return (
        <div className="the-meals">
           <div><h4>Title: {props.title}</h4> </div>
           <div>Description: {props.description} </div>
           <div>Price: {props.price} DKK</div>
           <div>Location: {props.location} </div>
        </div>
    )
}
