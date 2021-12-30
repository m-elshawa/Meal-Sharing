import React from "react";
import PropTypes from "prop-types";
import foodTable from '../assets/images/foodTable.png'
// import "./testComponentStyle.css";

export default function Home() {
  document.title = "Share your meals with the ones you love";

  return (
    <section className="main-page">
      <aside className="aside-h1">
        <h1>Share your meal experience</h1>
        <p>
          When you're traveling, sometimes the best way to experience the
          destination is to eat with locals in the comfort of their own home.
          But if you don't know anyone personally, there are apps that can
          connect you with people who will host such gatherings.
        </p>
      </aside>

      <div className="middle">
        <img src={foodTable} alt="home" className="heroFoto" />
       
      </div>
    </section>
  );
}
