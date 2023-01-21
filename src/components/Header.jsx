import React  from 'react';
import mmtLogoWhite from "../assects/mmtLogoWhite.png"
import '../styles/Header.css';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
function Header() {
  // const getuserArr = localStorage.getItem('userData'.name);
  // console.log(getuserArr);

  return (
    <>
        <nav>
       <img className="logo" src={mmtLogoWhite} alt="logo"/> 
      <main >
        <HashLink to = {"/"}><h6 className='header'>Flights</h6></HashLink>
        <HashLink to = {"/Hotels"}><h6 className='header'>Hotels</h6></HashLink>
        <HashLink to = {"/Trains"}><h6 className='header'>Trains</h6></HashLink>
        <HashLink to = {"/Signup"}><button className='loginbtn'>Log in</button></HashLink>
      </main>
    </nav>

    </> 
  )
}

export default Header