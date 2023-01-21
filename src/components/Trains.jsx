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
      width: "52%",
      margin: "20px",
      backgroundImage: `url(${Train})`,
      width: `44%`,
      marginLeft: "17rem",
      padding: `40px`,
      borderRadius: "20px",
      letterSpacing: `1px`,
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

    const { from, to, date } = inputval;
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
            <input id="form" type="text" />
          </label>
        </div>
        <p className='searchbtn'>
          <button className='btnsearch'
            onClick={shoot}
          >Search</button>
        </p>

        {/* second section */}   <h2>Avaliable Trains</h2>

        <div>
          {val.map((item, id) => 
          {
           return <div key={id} style={continr.dtacontainer}>
              <i className="fa fa-train" style={{
                fontSize: "48px", color: "white", display: "flex",
                justifyContent: "center"
              }}></i>
              <br></br>
              From<h2><span>{item.from}</span></h2>
              To<h2><span>{item.to}</span></h2>
              Departure<h2><span>{item.departure.departureTime} | {item.departure.departureDate}</span></h2>
              Price<h2><span>{item.price}</span></h2>
              Duration<h2><span>{item.duration}</span></h2>
              KiloMeters<h2><span>{item.kilometers}</span></h2>
              TainNumber<h2><span>{item.train_number}</span></h2>
              <button onClick={sendSubmit} style={continr.btn}>Book</button>
            </div>

            })}

        </div>
      </>

    )
  }
  

  export default Trains;