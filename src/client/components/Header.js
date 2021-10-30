import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {Context} from "./Context";

export default function Header() {
  const headerContext = React.useContext(Context);
  

  
  const handleSubmit = (e) =>  {
    // e.preventDefault();
    headerContext.setSearchValue(e.target.value);
    console.log(headerContext.searchValue);
  }

  return (
    <section className="Header">
      <nav className="nav">
        <NavLink to="/home" className="home-button">
          <a href="" className="logo0">
            <img className="logo" src={logo} alt="Meal Sharing Homepage" />
          </a>
        </NavLink>
        <h1>Meal Sharing for food lovers</h1>
        <div className="Navbar">
          <Link to="/" className="home">
            <button className="btn-nav">Home</button>
          </Link>

          <Link to="/meals" className="meals">
            <button className="btn-nav">Meals</button>
          </Link>

          <Link to="/about" className="about">
            <button className="btn-nav">About</button>
          </Link>

          <Link to="/test-Component" className="testme">
            <button className="btn-nav">Test</button>
          </Link>
        </div>
        <div>
          <div className="search-meal">
            <input
              className="input-header"
              type="text"
              onChange={handleSubmit}
              // value={headerContext.searchValue}
              placeholder="Search Meals.."
            ></input>
            {/* <button
              className="btn1"
             
              
              onClick={handleSubmit}
            >
              Search
            </button> */}
          </div>
        </div>
      </nav>
    </section>
  );
}
