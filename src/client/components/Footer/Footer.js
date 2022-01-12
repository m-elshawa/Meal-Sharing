import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import {TiSocialFacebook} from 'react-icons/ti'; 
import {TiSocialLinkedin} from 'react-icons/ti';
import {TiSocialGithub} from 'react-icons/ti';

function Footer() {
    document.title = 'Homepage-Meal Sharing App';
    const contacts = ['The Meal Sharing App Project','Phone: 05212510', 'E-mail: meal@sharing.dk', 'Address: Vesterbrogade 250, Københaven 2970' ]
    const contactsList = contacts.map(contact => <li>{contact} </li>)
  

  return (
    <div className="footer">
      <div className="contacts">
      {contactsList}
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/mohamed.mazen.58/" className="fb"><TiSocialFacebook/></a>
        <a href="https://www.linkedin.com/in/mmelshawa/" className="in"><TiSocialLinkedin/></a>
        <a href="https://github.com/m-elshawa" className="gh"><TiSocialGithub/></a>
        
        
        
        
      </div>

  </div>
    
      

  );
}

export default Footer;