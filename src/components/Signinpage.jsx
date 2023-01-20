import React from 'react'
import "../styles/Signinpage.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const  Signinpage= () => {
     const history = useNavigate();
        const [inpval, setInpval] = useState({     
          email: "",
          password: ""
        })

         const [data, setData] = useState([]);

              const getdata = (e) =>{
              // console.log(e.target.value);
                   
              const {value,name} = e.target;
              // console.log(value, name);

              setInpval(()=>{
                            return{
                            ...inpval,
                            [name]:value
                            }
              })

              }

              const addData = (e) =>{
              e.preventDefault();

              const getuserArr = localStorage.getItem('userData');
              console.log(getuserArr);


                            
              const {email,password} = inpval;
              if(email === ""){
                 alert("email field is required");
              }else if(!email.includes('@')){
                 alert("please enter valid email address");
              }
              else if(password === ""){
                alert("password field is required");
              }else if(password.length < 5){
                alert("password length should be greater than five");
              }else{
                if(getuserArr && getuserArr.length){
                  const userdata = JSON.parse(getuserArr);
                  const userlogin = userdata.filter((el,k)=>{
                  return el.email === email && el.password === password
                  });
                    if(userlogin.length === 0){
                        alert("Invalid details");
                    }else{
                      alert("user login successfully")
                    history("/Checkoutpage");
                    }
               }
              }
          }

              return (
              <div className="wrapper">
                  <div className='login'>
                      <h1>User Login</h1>
                          <div className="form-group">
                              <input type="email" autoFocus
                               className='Inputs' name="email" 
                               onChange={getdata} placeholder='email address'/>
                          </div>
                          <div className="form-group">
                              <input type="password"
                               name="password" onChange={getdata}  
                               className='Inputs' placeholder='password' />
                          </div>
                          <div className="button">
                              <button className='bttn' onClick={addData}>Log In</button>
                          </div>
                    </div>
              </div>
              )
}

export default Signinpage;















// import React from 'react'
// import "../styles/Signinpage.module.css";
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// function Signinpage() {
//   const [inpval, setInpval] = useState({
//     name: "",
//     password: "",
// })

//   const {name,password} = inpval;

//   if(name === ""){
//   alert("name field is required");
//   } else if(password === ""){
//   alert("password field is required");
//   }else if(password.length < 5){
//   alert("password length should be greater than five");
//   }



//   const  navigate = useNavigate();
//   // history.push("/Signin");
//   const sendSubmit = () => {
//     navigate("/Checkoutpage");
// };

//   return (
//     <div>
//         <div className="container">
//         <div className="box">
//             <h1 className="heading">Sign in</h1>
//             <p><label htmlFor="email" className="address">Email address</label></p>
//             <input className="email" type="text" id="email" placeholder="Enter email"/>
//             <p><label htmlFor="password" className="address">Password</label></p>
//             <input className="email" type="password" id="password" placeholder="Enter Password"/>
//             </div>
//             <button className="submit" onClick={sendSubmit} >Submit</button>
//                {/* <a onClick={sendSubmit} style={{cursor : "pointer"}}>iam not Registered</a> */}
//     </div>
//     </div>


//   )
// }

// export default Signinpage