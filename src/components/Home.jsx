import React from 'react'
import "../styles/Home.css"
import Flight from './flight'
// import axios from 'axios';
function Home() {

  
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
         <h2>Avaliable Tickets</h2>
        <div id='data'>
        <Flight/>
    </div>
    </>
    
  )
  
}

    // const url = "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights";
    // const data = axios.get(url).then((response) => {
    //     console.log(response);
    // })
    

export default Home