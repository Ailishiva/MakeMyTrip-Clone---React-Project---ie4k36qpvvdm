import React from 'react'
import "../styles/Hotel.css"
import HotelData from './Hoteldata';
function Hotels() {
  return (
    <>
        {/* first section */}
        <div className='hotel'>
        <p>
        <label htmlFor="room">Room Type:</label>
        <select id="room">
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Triple">Triple</option>
        </select>
        </p>
        </div>
        <div className='form'>
            <label htmlFor="form">
                <span>CITY OR LOCATION</span>
            <input id ="form" type="text"/>
            </label>

            <label htmlFor="form">
                <span>CHECK IN</span>
                <input id ="form" type="date"/>
            </label>

            <label htmlFor="form">
                <span>CHECK OUT</span>
                <input id ="form" type="date"/>
            </label>
            <label htmlFor="form">
                <span>GUESTS</span>
                <input id ="form" type="number"/>
            </label>
        </div>
         <p className='searchbtn'>   
            <button className='btnsearch'>Search</button>
         </p>

        {/* second section */}
         <h2>Avaliable Rooms</h2>

        <div>
        <HotelData/>
        </div>
    </>
  )
}


export default Hotels;