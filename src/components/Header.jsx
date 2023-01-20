import React from 'react';
import mmtLogoWhite from "../assects/mmtLogoWhite.png"
import '../styles/Header.css';
import { Link } from 'react-router-dom';
// import Hotels from './Hotels';
// import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
        <nav>
       <img className="logo" src={mmtLogoWhite} alt="logo"/> 
      <main >
        {/* <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link> */}
        <Link to = {"/"}><h6 className='header'>Flights</h6></Link>
        <Link to = {"/Hotels"}><h6 className='header'>Hotels</h6></Link>
        <Link to = {"/Trains"}><h6 className='header'>Trains</h6></Link>
        <button className='loginbtn'>Log in</button>
      </main>
    </nav>

    </>
  )
}

export default Header