import { useState } from "react";
import React  from 'react'
import "../styles.css";
import {Link} from 'react-router-dom';
import DrawerMenu from "./DrawerMenu";
import '../../App.css';
function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    
  return (
    <div className={colorChange
        ? "navbar colorChange"
        : "navbar"}>
        <nav className='navbarItem'>
            <h1 style={{fontFamily:'Fantasy, serif', fontSize:'25px', textAlign:'start', margin:'10px' }}>A Ray of Hope Outreach Ministries</h1>
            <ul className='navLinks'>
<li><Link to='/'>HOME</Link></li>
<li><Link to="/about" >ABOUT</Link></li>
<li><Link to='/events' >OUR WORK</Link></li>
<li><Link to='/contact'>CONTACT</Link></li>


            </ul>
            <div className="DrawerMenu">
< DrawerMenu/>
</div>
<Link to="/donate"><button className="donatebtn" style={{marginTop:'10px'}}>Donate</button></Link>
        </nav>
    </div>
  )
}

export default Navbar