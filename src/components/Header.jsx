import React,{useState}  from 'react';
import mmtLogoWhite from "../assects/mmtLogoWhite.png"
import icon from "../assects/icon.jpg"
import hotelicon from "../assects/hotelicon.png"
import trainicon from "../assects/trainicon.png"

import '../styles/Header.css';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
function Header() {
  // const Arr = localStorage.getItem('username');
  // console.log(Arr);
  // const [hideText, setHideText] = useState(true);

  // const onClick = () => setHideText(!hideText);


  return (
    <>
        <nav>
       <img className="logo" src={mmtLogoWhite} alt="logo"/> 
      <main >
        <div>
        <img className='icon' src={icon} alt="icon" style={{height: "30px"}}/>
        <HashLink to = {"/"}><h5 className='header'>Flights</h5></HashLink>
        </div>
        <div>
        <img className='icon' src={hotelicon} alt="icon" style={{height: "30px"}}/>
        <HashLink to = {"/Hotels"}><h5 className='header'>Hotels</h5></HashLink>
        </div>
        <div className='full'>
        <img className='icon' src={trainicon} alt="icon" style={{height: "30px"}}/>
        <HashLink to = {"/Trains"}><h5 className='header'>Trains</h5></HashLink>
        </div>
        {/* {!hideText ? <div id="about-div">
          <h1>{Arr}</h1>
        </div>:
       <HashLink to = {"/Signup"}><button className='loginbtn' onClick={onClick}>Log in</button></HashLink>} */}
      </main>
    </nav>

    </> 
  )
}

export default Header