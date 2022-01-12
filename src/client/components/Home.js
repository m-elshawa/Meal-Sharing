import React from "react";
import PropTypes from "prop-types";
import foodTable from '../assets/images/foodTable.png';
import Carousel from './Carousel/Carousel';
import pasta from '../assets/images/pasta.png'
import koshary from '../assets/images/koshary.png';
import masala from '../assets/images/masala.png';
import chilli from '../assets/images/chilli.png';
import magloube from '../assets/images/magloube.png';
import ris from '../assets/images/ris.png';


export default function Home() {
  document.title = "Share your meals with the ones you love";

  return (
    <main className="the-body">
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
    <section className="carousel">
      <h1>Isn't it delecious!!</h1>
      <Carousel>
        <item><img src={pasta}/></item>
        <item><img src={koshary}/></item>
        <item><img src={masala}/></item>
        <item><img src={chilli}/></item>
        <item><img src={magloube}/></item>
        <item><img src={ris}/></item>
      </Carousel>
      </section>
    </main>
    
    
  );
}
