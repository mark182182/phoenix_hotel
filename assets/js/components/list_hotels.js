import React, { Component } from 'react';
import '../../css/app.css';
import request from 'superagent';

class ListHotels extends Component {
  state = {
    hotels: {
      data: [{ name: 'a', location: 'b', capacity: 'c' },
      { name: 'd', location: 'e', capacity: 'f' }]
    }
  }
  // getHotels = this.getHotels.bind(this);

  componentDidMount() {
    this.getHotels();
  }

  getHotels() {

    request.get("/list_hotels")
      .then((hotels) => {
        this.setState({ hotels: hotels.body })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    this.state.hotels
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
                <td> {currentHotel.capacity}</td></tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListHotels