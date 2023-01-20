// import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react'
import Background from "../assects/background.jpg"
// import style from "../styles/Checkoutpage.module.css"
function Checkoutpage() {
 const style = {
    fareSummary:{
        width: "40%",
        flexDirection: "coloum",
        marginLeft: "4rem",
        borderRadius:"25px",
        backgroundColor: "rgb(148, 91,98)"
    },
    container:{
        display: "flex",
        marginTop: "4rem",
    },
    payment:{
        width: "40%",
        marginLeft: "4rem",
        borderRadius: "25px",
        backgroundImage: `url(${Background})`
    },
    header:{
        margin: "10px"
    },
    cost:{
        margin: "48px"
    },
    pay:{
        display: "flex",
        margin: "20px"
    },
    base:{
       margin: "auto",
       marginRight: "10px",
    },
    details:{
        margin: "27px",
    },
    carddetails:{
      margin: "5px",
      width: "25rem",
      border: "none",
      borderRadius: "5px",
    },
    button:{
      width: "6rem",
      padding: "7px",
      margin: "10px",
      cursor: "pointer",
      border: "none",
      background: "green",
      borderRadius: "5px",
      fontWeight: "800",
    },
 }

 const [inpval, setInpval] = useState({
    name: "",
    cardno: "",
    date: "",
    cvv: ""
})
const getData = (e) =>{
    // console.log(e.target.value);
         
    const {value,name} = e.target;

    // console.log(value, name);

    setInpval(()=>{
                  return{
                  ...inpval,
                  [name]:value,
                  }                            
    })

    }
    const addData = (e) =>{
        e.preventDefault();
        
        const {name,cardno,date,cvv} = inpval;
        if(name === ""){
            alert("name field is required");
        }
        else if(cardno === ""){
            alert("cardno field is required");
        }
        else if(cardno.length < 16 || cardno.length > 16) {
            alert(" please enter valid cardno details");
        }
        else if(date === ""){
            alert("date field is required");
        }
        else if(date < Date.now()){
            alert(" please enter valid expiry date");
        }
        else if(cvv === " "){
            alert("cvv field is required");
        }
         else if(cvv.length < 3 ||cvv.length > 3) {
            alert(" please enter valid cvv details");
        }

        else{
            alert("Booking Suceesfully Completed!!! Have a great day :)")
        }


    }

  return (
    <div style={style.container}>
       <div style={style.fareSummary}>
            <h3 style={style.header}>Fare Summary</h3>
       <div style={style.cost}>
            <div style={style.pay}>
                <h4 >Base fare</h4>
                <span style={style.base}>RS.5247</span>
            </div>
            <hr></hr>
            <div style={style.pay}>
                <h4>Fee & Subcharges</h4>
                <span style={style.base}>RS.840</span>
            </div>
            <hr></hr>
        <div style={style.pay}>
            <h4>Total Amount</h4>
            <span style={style.base}>RS.6087</span>
        </div>
        <hr></hr>
       </div>
    </div>
       <div  style={style.payment}>
       <h3 style={style.header}>Payment Method</h3>
       <div className='details'style={style.details}>
            <input type="text" name = "name" style={style.carddetails} onChange={getData} placeholder='Name on Card'/>
            <input type="number" name = "cardno" style={style.carddetails} onChange={getData} placeholder='Card Number'/>
            <input type="date" name = "date"style={style.carddetails} onChange={getData} placeholder='Expiry Date'/>
            <input type="password" name= "cvv" style={style.carddetails} onChange={getData} placeholder='CVV'/>
            <br></br>
            <button style={style.button} onClick={addData}>PAY</button>
            {/* <Button/> */}
       </div>
         
       </div>
    </div>
  )
}

export default Checkoutpage