import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import '../../css/app.css';
import request from 'superagent';

class ListHotels extends Component {
  state = {
    hotels: {
      data: []
    }
  }

  selectedHotelNameChange() {
    console.log(
      event.target.innerHTML
    );

    // this.setState(this.state.hotels.data.name);
  }

  selectedHotelLocationChange() {

  }

  selectedHotelCapacityChange() {

  }

  componentDidMount() {
    this.getHotels();
  }

  getHotels() {
    request.get('/list_hotels')
      .then((hotels) => {
        this.setState({ hotels: hotels.body })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateHotel(event) {
    console.log(event.target.id);
  }

  render() {
    return (
      <div>
        <h1>List of hotels:</h1>
        <table>
          <thead>
            <tr>
              <th colSpan="3"> Hotels </th>
            </tr>
            <tr>
              <td>Name</td>
              <td>Location</td>
              <td>Capacity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.hotels.data.map((currentHotel, i) => {
              return <tr key={10 * Math.random() + 24}>
                <td> {currentHotel.name}</td>
                <td> {currentHotel.location}</td>
                <td> {currentHotel.capacity}</td>
                <Popup trigger={<button id={currentHotel.id} onClick={this.updateHotel}> Edit </button>} modal position='left center'>
                  <div className='selected-hotel-info-container'>
                    <span>Name</span>
                    <span>Location</span>
                    <span>Capacity</span>
                  </div>
                  <div className='selected-hotel-container'>
                    <div className='selected-hotel-name-container'>
                      <input onChange={this.selectedHotelNameChange} className='selected-hotel-name' value={currentHotel.name}></input>
                    </div>
                    <div className='selected-hotel-location-container'>
                      <input onChange={this.selectedHotelLocationChange} className='selected-hotel-location' value={currentHotel.location}></input>
                    </div>
                    <div className='selected-hotel-capacity-container'>
                      <input onChange={this.selectedHotelCapacityChange} className='selected-hotel-capacity' value={currentHotel.capacity}></input>
                    </div>
                  </div>
                  <div className='save-update-container'>
                    <button className='save-update'>Save changes</button>
                  </div>
                </Popup>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListHotels