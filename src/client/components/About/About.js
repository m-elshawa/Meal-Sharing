import React from "react";
import PropTypes from "prop-types";
import "./About.css";

export default function About() {
  return (
    <section className="About">
      <div className="container">
        {/* <p>Experience the taste of International Cuisines</p> */}

        <img
          src="https://wallpaperaccess.com/full/1843937.jpg"
          alt="Enjoy the experience"
        />
        <div className="aside">
          <h1>The Meal Sharing App</h1>
          <p>
            Whether it's social media or a ride with Uber, there are many
            different ways to share these days. As a result, it’s no surprise
            that the food-sharing economy is picking up steam! With so much food
            thrown away, many are looking for solutions that will reduce waste.
            Some food services are dedicated to sharing leftovers or providing a
            unique meal for locals. So using them can be an innovative way to
            get an inexpensive meal from an unknown local chef! However, others
            seek to pair extra food from producers and retailers with
            non-profits. Not only can food sharing fight hunger, but it’s also
            more environmentally friendly too! So no matter your reason for food
            sharing, it's a great way to save money, reduce waste, and eat
            delicious food.
          </p>
        </div>
      </div>
    </section>
  );
}
