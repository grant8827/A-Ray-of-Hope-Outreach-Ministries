import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaypal,  } from '@fortawesome/free-brands-svg-icons';
import { faZ, faDollar } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';
function Bonner() {
  return (
    <div>
        <div className='bonner' style={{}}>
      <div style={{width:'auto', margin:'30px ', padding:'20px'}}>
      <h3 style={{fontSize:'25px', marginBottom:'20px'}}>Help us Help someone that is in need</h3>
        <p style={{lineHeight:'30px', color:'white'}}>A ray of hope ministries is dedicated to supporting families and children in need, focusing on uplifting low-income communities. Since 2014, we have providing essential resources such as food, clothing, educational materials and access to programs that promote health, education and personal development to hundreds. Help us change someone's life today by donating. Any amount will be greatly appreciated.</p>
      </div>
      
      <div className='bonnerDonateBtn'> 
      <Link to="/donate"> <button style={{}}>PayPal <FontAwesomeIcon style={{backgroundColor:'white', padding:'3px', width:"18PX", borderRadius:'50%', color:'#0790d0'}} icon={faPaypal} /></button></Link>
      <Link to="/donate"><button style={{}}>Zelle <FontAwesomeIcon style={{backgroundColor:'white', padding:'3px', width:"18PX", borderRadius:'50%', color:'#6911d2'}} icon={faZ} /></button></Link>
      <Link to="/donate"> <button style={{}}>Cash App <FontAwesomeIcon style={{backgroundColor:'green', color:'white', padding:'3px', width:"18PX", borderRadius:'50%'}} icon={faDollar} /></button></Link>
         

         </div>
      </div>
    </div>
  )
}

export default Bonner