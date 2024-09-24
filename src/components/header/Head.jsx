import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";
import Navbar from './Navbar';
import headImg from '../assets/images/ComputerLab.webp';
function Head() {

  return (
    <div className='headerStyle' style={{ 
      width: "100%",
    height: "100%",
    backgroundPosition: 'center',
    backgroundSize: 'cover 100%',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
      oBackgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  backgroundColor:'rgba(0, 0, 0, 0.450)',
  backgroundBlendMode: 'overlay',
    backgroundImage: "url(" + headImg + ")",}} >
      
       <Navbar/>
       <div  style={{textAlign: 'center',justifyContent:'center', alignContent:'center',height:'700px',
alignItems: 'center',
}}>
        <h3 style={{fontSize:'30px', marginBottom:'20px'}}>Welcome to </h3>
       <h2 style={{fontSize:'50px', marginBottom:'20px'}}>A Ray of Hope Outreach Ministries inc</h2>
       <p style={{color:'white', fontSize:'20px',  margin:'20PX' }}>The rainbow shall be in the cloud, and I will look on it to remember the everlasting covenant between God and every living creature of all flesh that is on the earth.</p>
       <div style={{width:'100%', justifyContent:'center', textAlign:'center', }}> <Link to="/about" ><button style={{width:''}}>More Info</button></Link></div>

       </div>
      
        </div>
  )
}

export default Head