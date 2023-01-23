import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import "../styles/Signuppage.css"
// import background from "../assects/10998745.jpg"


const Signuppage = () =>{

     const historys = useNavigate();

        const [inpval, setInpval] = useState({
                            name: "",
                            email: "",
                            date: "",
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
                            [name]:value,
                            }                            
              })

              }

              const addData = (e) =>{
                            e.preventDefault();
                            
                            const {name,email,date,password} = inpval;

                            if(name === ""){
                                          alert("name field is required");
                            }else if(email === ""){

                                          alert("email field is required");

                            }else if(!email.includes('@')){
                                          alert("please enter valid email address");
                            }
                            else if(date === ""){
                                          alert("date field is required");

                            }else if(password === ""){
                                          alert("password field is required");
                            }else if(password.length < 5){                                                                                                                                            }else if(password.length < 5){
                                          alert("password length should be greater than five");
                            }else{
                                          localStorage.setItem("userData",JSON.stringify([...data,inpval]));// inpval k andr hmne name email wgerah store kiya h
                                          localStorage.setItem("username", ["name"]);
                                          alert('User successfully registered');
                                          historys("/Signin");
                            }


              }

    return (
        <div className='signup' alt="background">
        <div className='cons'>
                        <div className="container">
                                <section className='starting'>
                                    <div className="left-data mt-3 p-3" style={{width:'100%'}}>
                                       <h1 className='text-center col-lg-6'>Sign Up</h1>
                                            <Form className='inputform'>
                                                <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
                                                    <Form.Control type="text" name='name' onChange={getdata} autoFocus placeholder="Enter your Name" className='inp'/>
                                                    <Form.Text className="text-muted">
                                                </Form.Text>
                                                </Form.Group>
                                                    <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
                                                    <Form.Control type="email" name='email'  onChange={getdata} placeholder="Enter email" className='inp' />
                                                    <Form.Text className="text-muted">                                                                    
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
                                                    <Form.Control type="date" name='date' onChange={getdata} className='inp' />
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                                    <Form.Control type="password" name='password' onChange={getdata} placeholder="Password"  className='inp'/>
                                                </Form.Group>
                                                <Button variant="primary" type="submit" onClick={addData} className='buttons col-lg-6'>
                                                Submit
                                                </Button>
                                            </Form>
                                           <p className='para'>Already Have an Account? <span><a href="#"><Link to="/Signin">Log In</Link></a>
                                           </span></p>
                                         </div>
                                    </section>
                                </div>
                            </div>
                            </div>
              )
}

export default Signuppage


