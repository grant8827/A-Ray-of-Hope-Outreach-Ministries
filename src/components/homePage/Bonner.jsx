import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaypal,  } from '@fortawesome/free-brands-svg-icons';
import { faZ, faDollar } from '@fortawesome/free-solid-svg-icons'

function Bonner() {
  return (
    <div>
        <div style={{width:'100%', height:'100%', backgroundColor:'#001385', padding:'30px', textAlign:'center', margin:'0'}}>
      <div style={{width:'auto', margin:'30px ', padding:'20px'}}>
      <h3 style={{fontSize:'25px', marginBottom:'20px'}}>What is Lorem Ipsum?</h3>
        <p style={{lineHeight:'30px', color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      
      <div className='bonnerDonateBtn'> 
      <Link to="/donate"> <button style={{margin:'20px'}}>PayPal <FontAwesomeIcon style={{backgroundColor:'white', padding:'3px', width:"18PX", borderRadius:'50%', color:'#0790d0'}} icon={faPaypal} /></button></Link>
      <Link to="/donate"><button style={{margin:'20px'}}>Zelle <FontAwesomeIcon style={{backgroundColor:'white', padding:'3px', width:"18PX", borderRadius:'50%', color:'#6911d2'}} icon={faZ} /></button></Link>
      <Link to="/donate"> <button style={{margin:'20px'}}>Cash App <FontAwesomeIcon style={{backgroundColor:'green', color:'white', padding:'3px', width:"18PX", borderRadius:'50%'}} icon={faDollar} /></button></Link>
         

         </div>
      </div>
    </div>
  )
}

export default Bonner