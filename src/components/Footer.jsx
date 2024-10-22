import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faTiktok, faYoutube,faPaypal  } from '@fortawesome/free-brands-svg-icons';
import { faZ, faContactBook, } from '@fortawesome/free-solid-svg-icons'
import logo from '../components/assets/images/A Ray of Hope Logo3 NO BACKGROUND.png'

function Footer() {
  return (
    <div>
         <div className='topfooter'>
<div className='topFooterItems'>
  
<div style={{  padding:'20px', margin:'20px'}}>
    <h3 style={{fontSize:'20px', marginBottom:'10px'}}>Site Identity</h3>
<div><img style={{width:'180px'}} src={logo} alt='logo'/></div>
</div> 

<div style={{ padding:'20px', margin:'20px'}}>
    <h3 style={{fontSize:'20px', marginBottom:'10px'}}>NavLinks</h3>
    <ul >
<li style={{listStyle:'none', color:'var(--white',}}>Home</li>
<li style={{listStyle:'none', color:'var(--white', marginTop:'15px'}}>About Us</li>
<li style={{listStyle:'none', color:'var(--white', marginTop:'15px'}}>Events</li>
<li style={{listStyle:'none', color:'var(--white', marginTop:'15px'}}>Contact Us</li>

            </ul>
    </div>

            <div style={{ margin:'20px', padding:'10px'}}>
                <h4 style={{fontSize:'20px', marginBottom:'20px'}}>Social Media Links</h4>
                <p style={{color:'var(--white', marginBottom:'20px'}}>To receive updates on the latest Outreach Follow on</p>
                <FontAwesomeIcon style={{margin:'20px', width:'30px', fontSize:'30px', color:'blue', backgroundColor:'white', padding:'10px', borderRadius:'50%'}} icon={faFacebookF} />
                <FontAwesomeIcon style={{margin:'20px', fontSize:'35px', color:'#cf0073', backgroundColor:'white',  padding:'10px', borderRadius:'50%'}} icon={faInstagram} />
                <FontAwesomeIcon style={{margin:'20px', width:'30px', fontSize:'30px', color:'black', backgroundColor:'white', padding:'10px', borderRadius:'50%'}} icon={ faTiktok }/>
                <FontAwesomeIcon style={{margin:'20px', width:'30px', fontSize:'30px', color:'red', backgroundColor:'white', padding:'10px', borderRadius:'50%'}} icon={faYoutube} />

                
            </div>

            <div style={{ margin:'20px', padding:'20px'}}>
                <h3 style={{fontSize:'20px', marginBottom:'35px'}}>Ways To Danate</h3>
                <p  style={{color:'var(--white', marginBottom:'20px'}}>You Donation of any amount is greatly apreciated</p>
                <div style={{flexDirection:'column', display:'block'}}>
                <Link to="/donate"><button style={{margin:'20px'}}>PayPal <FontAwesomeIcon style={{backgroundColor:'white', padding:'3px', width:"18PX", borderRadius:'50%', color:'#0790d0'}} icon={faPaypal} /></button></Link>
                <Link to="/donate"><button style={{margin:'20px'}}>Zelle <FontAwesomeIcon style={{backgroundColor:'white', padding:'3px', width:"18PX", borderRadius:'50%', color:'#6911d2'}} icon={faZ} /></button></Link>
                <Link to="/donate"><button style={{margin:'20px'}}>Contat us<FontAwesomeIcon style={{backgroundColor:'green',marginLeft:'8px', color:'white', padding:'3px', width:"18PX", borderRadius:'50%'}} icon={faContactBook} /></button></Link>
         
                </div>
                
            </div>





</div>

    </div>
      <div style={{backgroundColor:'#001385', borderTop:'1px solid black', textAlign:'center', padding:'10px', width:'100%', height:'100%', overflow:'hidden'}}>
        <p style={{color:'white', margin:'20PX'}}>Copyright © 2024 - Present / A Ray of Hope Outreach Ministries Inc.</p>
        </div>      
      
    </div>
  )
}

export default Footer