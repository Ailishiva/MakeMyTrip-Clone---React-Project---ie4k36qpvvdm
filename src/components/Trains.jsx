import React from 'react'
import "../styles/Trains.css";
import { TrainData } from './Traindata';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Train from "../assects/travel.jpg"

function Trains() {
  const [ val, Setval ] = useState(TrainData);

  const continr = {
    dtacontainer: {
      color: `#fff`,
      width: "60%",
      margin: "20px",
      backgroundImage: `url(${Train})`,
      marginLeft: "16rem",
      padding: `29px`,
      borderRadius: "20px",
      letterSpacing: `1px`,
    },
    flex:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      marginTop: "30px",

    },
    duration:{
      display: "flex",
      flexDirection: "column",
      textAlign: "center",

    },

    btn: {
      width: `5vw`,
      padding: `10px`,
      fontWeight: `900`,
      marginLeft: `4rem`,
      borderRadius: "10px",
      display: `flex`,
      justifyContent: `center`,
      cursor: `pointer`,
      border: "none",
    }


  }

  const [inputval, SetInputval] = useState({
    from: "",
    to: "",
    date: "",
  });
  console.log(TrainData);
  const eventhandler = (e) => {
    // e.preventDefault();
    const { value, name } = e.target;
    console.log(value);
    SetInputval(() => {
      return {
        ...inputval,
        [name]: value,
      }
    })

  }
  const shoot = (e) => {
    e.preventDefault();

    const { from, to, date} = inputval;
    console.log(inputval);
    if (from === "") {
      alert("from field is required");
    }
    else if (to === "") {
      alert("to field is required");
    }
    else if( date === ""){
      alert("date field is required");
    }
    else {
      Setval((old) => {
        return TrainData.filter((item) =>
          {
          return (item.from.toLowerCase().includes(from.toLowerCase()) &&
          item.to.toLowerCase().includes(to.toLowerCase())) 
          // item.departure.departureDate.includes(date))
        }
        )
      }
      )
    }
  }
  
   


   console.log(val)

    
    const navigate = useNavigate();
    // history.push("/Signin");
    const sendSubmit = () => {
      navigate("/Signup");
    };


    //    console.log(TrainData);

    return (
      <>
        <div className='train'>
          <p>
            <label htmlFor="trip">Trip Type:</label>
            <select id="trip">
              <option value="OneWay">OneWay</option>
              <option value="TwoWay">TwoWay</option>
            </select>
          </p>
        </div>
        <div className='form'>
          <label htmlFor="form">
            <span>FROM</span>
            <input id="form" type="text" name='from'
              onChange={eventhandler}
            />
          </label>

          <label htmlFor="form">
            <span>TO</span>
            <input id="form" type="text" name='to'
              onChange={eventhandler}
            />
          </label>
          <label htmlFor="form">
            <span>TRAVEL DATE</span>
            <input id="form" type="date" name='date'
              onChange={eventhandler}
            />
          </label>
          <label htmlFor="form">
            <span>CLASS</span>
            <input id="form" type="text" value="ALL"/>
          </label>
        </div>
        <p className='searchbtn'>
          <button className='btnsearch'
            onClick={shoot}
          >Search</button>
        </p>

        {/* second section */}   <h2>AVAILABLE TRAINS</h2>
        

        <div         style={{backgroundColor:  `#90EE90`}}>
          {val.map((item, id) => 
          {
           return <div key={id} style={continr.dtacontainer}>
            <div style={continr.flex}>
              <i className="fa fa-train" style={{
                fontSize: "48px", color: "white", 
              }}></i>
              <div>
              From<h2><span>{item.from}</span></h2>
              </div>
              <div>
              To<h2><span>{item.to}</span></h2>
              </div>
              <div>
              Departure<h2><span>{item.departure.departureTime} | {item.departure.departureDate}</span></h2>
              </div>
              <div>
              Price<h2><span>{item.price}</span></h2>
              </div>
              <div>
              KiloMeters<h2><span>{item.kilometers}</span></h2>
              </div>
              <div>
              TainNumber<h2><span>{item.train_number}</span></h2>
              </div>
              </div>
              <div style={continr.duration}>
              Duration<h2><span>---{item.duration}---</span></h2>
              </div>
              <button onClick={sendSubmit} style={continr.btn}>Book</button>
            </div>

            })}

        </div>
      </>

    )
  }
  

  export default Trains;