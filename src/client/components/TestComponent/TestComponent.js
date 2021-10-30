/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import PropTypes from "prop-types";
import "./testComponentStyle.css";

export default function TestComponent() {
  return (
    <section className="test-component">
      <h1>Meal Sharing App</h1>
      <h3>Share your Favorite meals with friends and family</h3>
      <button className="btn">Check Meals</button>
      <p>Choose between the meals</p>
    </section>
  );
}
