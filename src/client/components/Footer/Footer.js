import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
// import "./testComponentStyle.css";

function Footer() {
    document.title = 'Homepage-Meal Sharing App';
    const contacts = ['The Meal Sharing App Project','Phone: 05212510', 'E-mail: meal@sharing.dk', 'Address: Vesterbrogade 250, Københaven 2970' ]
    const contactsList = contacts.map(contact => <li>{contact} </li>)
  

  return (
    <div className="footer">
      <div className="contacts">
      {contactsList}
      </div>

  </div>
    
      

  );
}

export default Footer;