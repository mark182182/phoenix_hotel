import React, { Component } from 'react';
import '../../css/app.css';
import request from 'superagent';

class ListHotels extends Component {
  state = {
    hotels: {}
  }

  render() {
    return (
      <div>
        <h1>List of hotels:</h1>
        <table class="tg">
          <tr>
            <th class="tg-c3ow" colspan="3">Hotels</th>
          </tr>
          <tr>
            <td class="tg-ydyv">2:05</td>
            <td class="tg-ydyv">1:15</td>
            <td class="tg-ydyv">1:41</td>
          </tr>
          <tr>
            <td class="tg-dvpl">14:10</td>
            <td class="tg-dvpl">15:45</td>
            <td class="tg-dvpl">16:00</td>
          </tr>
          <tr>
            <td class="tg-ydyv">55%</td>
            <td class="tg-ydyv">90%</td>
            <td class="tg-ydyv">88%</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ListHotels