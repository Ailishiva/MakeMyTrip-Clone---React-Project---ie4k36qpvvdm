import React from 'react'
import "../styles/Home.css"
import Flight from './flight'
import Airplane from "../assects/airplane.jpg"
// import axios from 'axios';
function Home() {
//  const box={
//    container:{
//     // backgroundColor: "red"
//     // backgroundImage:  `url(${Airplane})`,
//    }
//  }
  
  return (
    <>
    {/* first section */}
    <div className='home'>
        <p>
        <label  htmlFor="trip" >Trip Type:</label>
        <select id="trip">
        <option value="oneway">OneWay</option>
        <option value="roundtrip">RoundTrip</option>
        <option value="multicity">MultiCity</option>
        </select>
        </p>
        </div>
        <div className='form'>
            <label htmlFor="form">
                <span>FROM</span>
            <input id ="form" type="text"/>
            </label>

            <label htmlFor="form">
                <span>TO</span>
                <input id ="form" type="text"/>
            </label>

            <label htmlFor="form">
                <span>DEPARTURE</span>
                <input id ="form" type="date"/>
            </label>
            <label htmlFor="form">
                <span>RETURN</span>
                <input id ="form" type="date"/>
            </label>
        </div>
         <p className='searchbtn'>   
            <button className='btnsearch'>Search</button>
         </p>

        {/* second section */}
         <h2>AVALIABLE FLIGHTS</h2>
         
        <div id='data' 
        style={{backgroundColor:  `#87CEEB`}}
        >
        <Flight/>
        </div>
    </>
    
  )
  
}

    

export default Home
