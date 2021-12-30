/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, {Component} from "react";
import PropTypes from "prop-types";
import "./testComponentStyle.css";
import formFoto from "../../assets/images/formFoto.png";

class TestComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       description: '',
       price: '',
       location: '',
       reservationDate: '',
       favoriteDrink: ''

    }
  }
  
handleTitleChnge = (event) => {
this.setState({
  title: event.target.value
})
}

handleDescriptionChange = (event) => {
this.setState({
  description: event.target.value
})
}

handlePriceChange = (event) => {
  this.setState({
    price: event.target.value
  })
}

handleLocationChange = (event) => {
  this.setState({
    location: event.target.value
  })
}

handleReservationDateChange= (event) => {
  this.setState({
    reservationDate: event.target.value
  })
}

handleNumberOfGuestsChange = (event) => {
  this.setState({
    numberOfGuests: event.target.value
  })
}

handleFavoriteDrinkChange = (event) => {
  this.setState({
    favoriteDrink: event.target.value
  })
}
render() {
  return (
    <section className="test-component">
      <div className="headers">
      <h1>Add your favorite meal!</h1>
      <h3>Share your Favorite meals with friends and family</h3>
      </div>
      
      <div className="formPage">
      
      <form className="theForm">
        <div className="inputBox">
          <label>Title </label>
          <input type="text" className="input" value={this.state.title} onChange={this.handleTitleChnge}></input>
        </div>
        <div className="inputBox">
          <label>Description  </label>
          <textarea type="text" className="input" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
        </div>
        <div className="inputBox">
          <label>Price  </label>
          <input type="text" className="input" value={this.state.price} onChange={this.handlePriceChange}></input>
        </div>
        <div className="inputBox">
          <label>Location  </label>
          <input type="text" className="input" value={this.state.location} onChange={this.handleLocationChange}></input>
        </div>
        <div className="inputBox">
          <label>Reservation Date  </label>
          <input type="date" className="input" value={this.state.reservationDate} onChange={this.handleReservationDateChange}></input>
        </div>
        <div className="inputBox">
          <label>Number of guests  </label>
          <input type="text" className="input" value={this.state.numberOfGuests} onChange={this.handleNumberOfGuestsChange}></input>
        </div>
        <div className="inputBox">
          <label>Favorite Drink  </label>
          <select type="text" className="input" value={this.state.favoriteDrink} onChange={this.handleFavoriteDrinkChange}>
            <option value="Water">Water</option>
            <option value="Soft Drinks">Soft Drinks</option>
            <option value="Alcohol">Alcohol</option>
          </select>
        </div>
        <button type="submit" className="btnForm">Add Meal</button>
      </form>
      <img src={formFoto} alt="add your meal" class="formFoto" />
      </div>
     
      <p>Choose between the meals</p>
    </section>
  );
}
}
 
export default TestComponent