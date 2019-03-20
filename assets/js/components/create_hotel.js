import React, { Component } from 'react';
import '../../css/app.css';
import request from 'superagent';

class CreateHotel extends Component {
  state = {
    name: "",
    location: "",
    capacity: 0,
  };
  handleNameChange = this.handleNameChange.bind(this);
  handleLocationChange = this.handleLocationChange.bind(this);
  handleCapacityChange = this.handleCapacityChange.bind(this);
  submitHotel = this.submitHotel.bind(this);

  handleNameChange() {
    this.setState({ name: event.target.value })
  }

  handleLocationChange() {
    this.setState({ location: event.target.value })
  }

  handleCapacityChange() {
    this.setState({ capacity: event.target.value })
  }

  submitHotel() {
    event.preventDefault();
    const hotel = {
      name: this.state.name,
      location: this.state.location,
      capacity: this.state.capacity
    };
    console.log(hotel);
    request.post('/hotel/')
      .set('x-csrf-token', this.props.csrf_token)
      .set('Content-Type', 'application/json')
      .send(hotel)
      .then((callback) => {
        console.log(callback);
      })
      .catch((errorCallback) => {
        console.error(errorCallback);
      });
  }

  render() {
    return (
      <div>
        <h1>Create a new hotel</h1>
        <form>
          <label htmlFor="name">Name (2 to 30 characters)</label>
          <input name="name" type="text" minLength="2" maxLength="30" id="name" onChange={this.handleNameChange} value={this.state.name} required></input>
          <label htmlFor="location">Location (2 to 30 characters)</label>
          <input name="location" type="text" minLength="2" maxLength="30" id="location" onChange={this.handleLocationChange} required></input>
          <label htmlFor="capacity">Capacity</label>
          <input name="capacity" type="number" minLength="1" id="capacity" onChange={this.handleCapacityChange} required></input>
          <button onClick={this.submitHotel} name="submit" type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default CreateHotel;