import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
// import "./testComponentStyle.css";

function Footer() {
    document.title = 'Homepage-Meal Sharing App';
    
  

  return (
    <div className="footer">
    <ul>
      <li>Phone</li>
      <li>Address</li>
      <li>Social Media</li>
      <li>Github</li>
    </ul>
  </div>
    
      

  );
}

export default Footer;