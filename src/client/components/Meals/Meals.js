import React, {useState, UseEffect} from "react";
import Meal from "../Meal/Meal"
import {Context} from "../Context";
import "./Meals.css"

export default function Meals () {
const [meals, setMeals] =  React.useState([]);
const mealContext = React.useContext(Context)


React.useEffect(() =>
{fetch(`api/meals?title=${mealContext.searchValue}`)
.then(res=>res.json())
.then(data=>{
    setMeals(data);
})}, [mealContext.searchValue]

) 
return <div>
    <h3>my meals</h3>
    <div className="each-meal">
    {meals.map((meal) => <Meal key={meal.id} title={meal.title} price={meal.price} location={meal.location} description={meal.description} />)}
    </div>
    
</div>
} 