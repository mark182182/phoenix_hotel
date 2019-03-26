import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import '../../css/app.css';
import request from 'superagent';

class ListHotels extends Component {
  state = {
    hotels: {
      data: []
    },
    id: ''
  }

  componentDidMount() {
    this.getHotels();
  }

  selectedHotelIdChange() {
    console.log(event.target);
    this.setState({ id: event.target.value });
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

  updateHotel = () => {
    const id = event.target.id;
    const name = document.querySelector('.selected-hotel-name').value;
    const location = document.querySelector('.selected-hotel-location').value;
    const capacity = document.querySelector('.selected-hotel-capacity').value;
    const hotel = { 'id': id, 'name': name, 'location': location, 'capacity': capacity };
    request.put('/hotel/' + id)
      .set('x-csrf-token', this.props.csrf_token)
      .set('Content-Type', 'application/json')
      .send({ hotel: hotel })
      .then((callback) => {
        console.log(callback);
      })
      .error((error) => {
        console.error(error);
      });
  }

  deleteHotel = () => {
    const id = event.target.id;
    request.delete('/hotel/' + id)
      .set('x-csrf-token', this.props.csrf_token)
      .set('Content-Type', 'application/json')
      .then((callback) => {
        console.log(callback);
      })
      .error((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>List of hotels:</h1>
        <table>
          <thead>
            <tr>
              <th id='title' colSpan="5"> Hotels </th>
            </tr>
            <tr>
              <td>Name</td>
              <td>Location</td>
              <td>Capacity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.hotels.data.map((currentHotel, i) => {
              return <tr key={31 * Math.random()}>
                <td> {currentHotel.name}</td>
                <td> {currentHotel.location}</td>
                <td> {currentHotel.capacity}</td>
                <td>
                  <Popup trigger={<button> Edit </button>} modal position='left center'>
                    <div className='selected-hotel-info-container'>
                      <span>Name</span>
                      <span>Location</span>
                      <span>Capacity</span>
                    </div>
                    <div className='selected-hotel-container'>
                      <div className='selected-hotel-name-container'>
                        <input type='text' className='selected-hotel-name' defaultValue={currentHotel.name}></input>
                      </div>
                      <div className='selected-hotel-location-container'>
                        <input type='text' className='selected-hotel-location' defaultValue={currentHotel.location}></input>
                      </div>
                      <div className='selected-hotel-capacity-container'>
                        <input type='number' className='selected-hotel-capacity' defaultValue={currentHotel.capacity}></input>
                      </div>
                    </div>
                    <div className='save-update-container'>
                      <button id={currentHotel.id} onClick={this.updateHotel} className='save-update'>Save changes</button>
                    </div>
                  </Popup>
                </td>
                <td>
                  <div>
                    <button id={currentHotel.id} onClick={this.deleteHotel} className='delete'> Delete </button>
                  </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div >
    );
  }
}

export default ListHotels