import React from 'react'
import "../styles/Trains.css";
import {TrainData} from './Traindata';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Trains() {
    const [inputval, SetInputval] = useState({
              from:"",
              to:"",
              date: "",
    });
console.log(TrainData);
    const eventhandler = (e) =>{
      // e.preventDefault();
      const {value,name} = e.target;
     console.log(value);
      SetInputval(()=>{
        return{
        ...inputval,
        [name]:value,
        }                            
     })

  }
  const shoot=(e)=>{
    e.preventDefault();

    const {from, to, date} = inputval;
    console.log(inputval);
    if(from === ""){
      alert("from field is required");
    }
    else if(to === ""){
      alert("to field is required");
    }
    // else if( date === ""){
    //   alert("date field is required");
    // }
    else{
          <div>
         {TrainData.filter((item)=>{
            // return from.toLowerCase() === " "
            //   ? item : 
            //   item.from.toLowerCase().includes(from) &&
            //   to.toLowerCase() === " "
            //   ? item: 
            //   item.to.toLowerCase().includes(to) &&
            //   item.departure.departureDate.includes(date)
            console.log(item);
            return (item.from.toLowerCase().includes(from.toLowerCase())  &&
                  item.to.toLowerCase().includes (to.toLowerCase()) )
                  // item.departure.departureDate.includes( date)

        }).map((item, id) =>(
            <div key={id} style={{border : "1px solid", width: "40%",  margin: "20px"} }>
            From<h3><span>{item.from}</span></h3>
            
            To<h3><span>{item.to}</span></h3>
            Departure<h3><span>{item.departure.departureTime} | {item.departure.departureDate}</span></h3>
            Price<h3><span>{item.price}</span></h3>
            Duration<h3><span>{item.duration}</span></h3>
            KiloMeters<h3><span>{item.kilometers}</span></h3>
            TainNumber<h3><span>{item.train_number}</span></h3>
            <button onClick={sendSubmit}>Book</button>
          </div>

        ))}
    </div>   

    }

  }

    

    // const [inputvalto, SetInputvalto] = useState("");
    // const [inputvaldate, setIntervaldate] = useState("");
    // const eventhandler = (e) =>{
    //    SetInputval(e.target.value);
    //  //  console.log(e.target.value);
    // }
    // const eventhandlerto = (e) =>{
    //     SetInputvalto(e.target.value);
    //   //  console.log(e.target.value);
        
    // }
    // const eventhandlerdate=(e) =>{
    //   setIntervaldate(e.target.value);
    //   console.log(e.target.value);

    // }
    const  navigate = useNavigate();
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
    {/* <option value="Triple">Triple</option> */}
    </select>
    </p>
    </div>
    <div className='form'>
        <label htmlFor="form">
            <span>FROM</span>
        <input id ="form" type="text" name='from'
         onChange={eventhandler}
        />
        </label>

        <label htmlFor="form">
            <span>TO</span>
            <input id ="form" type="text"  name='to'
            onChange={eventhandler}
             />
        </label>
n
        <label htmlFor="form">
            <span>TRAVEL DATE</span>
            <input id ="form" type="date"  name='date'
             onChange={eventhandler}
            />
        </label>
        <label htmlFor="form">
            <span>CLASS</span>
            <input id ="form" type="text"/>
        </label>
    </div>
     <p className='searchbtn'>   
        <button className='btnsearch'
         onClick={shoot}
        >Search</button>
     </p>

    {/* second section */}   <h2>Avaliable Trains</h2>

<div>
{TrainData.map((item, id) =>(
            <div key={id} style={{border : "1px solid", width: "40%",  margin: "20px"} }>
            From<h3><span>{item.from}</span></h3>
            
            To<h3><span>{item.to}</span></h3>
            Departure<h3><span>{item.departure.departureTime} | {item.departure.departureDate}</span></h3>
            Price<h3><span>{item.price}</span></h3>
            Duration<h3><span>{item.duration}</span></h3>
            KiloMeters<h3><span>{item.kilometers}</span></h3>
            TainNumber<h3><span>{item.train_number}</span></h3>
            <button onClick={sendSubmit}>Book</button>
          </div>

))}

</div>
        {/* <TrainData/> */}
        {/* <div>
         {TrainData.filter((item, id)=>{
            return inputval.toLowerCase() === " "
              ? item : 
              item.from.toLowerCase().includes(inputval) &&
              inputvalto.toLowerCase() === " "
              ? item: 
              item.to.toLowerCase().includes(inputvalto) &&
              item.departure.departureDate.includes(inputvaldate)

        }).map((item, id) =>(
            <div key={id} style={{border : "1px solid", width: "40%",  margin: "20px"} }>
            From<h3><span>{item.from}</span></h3>
            
            To<h3><span>{item.to}</span></h3>
            Departure<h3><span>{item.departure.departureTime} | {item.departure.departureDate}</span></h3>
            Price<h3><span>{item.price}</span></h3>
            Duration<h3><span>{item.duration}</span></h3>
            KiloMeters<h3><span>{item.kilometers}</span></h3>
            TainNumber<h3><span>{item.train_number}</span></h3>
            <button onClick={sendSubmit}>Book</button>
          </div>

        ))}
    </div>   */}
   </>

  )

        }
export default Trains;