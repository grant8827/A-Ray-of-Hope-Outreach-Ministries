import React from 'react'
import image1 from '../assets/images/ComputerLab.webp';

function Bottomgallery(props) {
  return (
    <div style={{marginTop:'70px', width:'fitContent', height:'100%',display:'flex', flexWrap: 'wrap', padding:'30px', justifyContent:'center', alignItems:'center' }}>
        
        
        <div style={{alignItems:'center', textAlign:'center',margin:'30px' }}>
            <img style={{ width:'200PX', height:'200px', borderRadius:'50%'}} src={image1} alt='G-Image'/>
            <h3 style={{color:'#001385', margin:'10px'}}>sheets containing Lorem</h3>
        </div>
        
        <div style={{alignItems:'center', textAlign:'center', margin:'30px'}}>
            <img style={{ width:'200PX', height:'200px', borderRadius:'50%'}} src={image1} alt='G-Image'/>
            <h3 style={{color:'#001385'}}>versions of Lorem Ipsum</h3>
        </div>

        <div style={{alignItems:'center', textAlign:'center',  margin:'30px'}}>
            <img style={{ width:'200PX', height:'200px', borderRadius:'50%'}} src={image1} alt='G-Image'/>
            <h3 style={{color:'#001385'}}>What is Lorem Ipsum</h3>
        </div>

        <div style={{alignItems:'center', textAlign:'center',  margin:'30px'}}>
            <img style={{ width:'200PX', height:'200px', borderRadius:'50%'}} src={image1} alt='G-Image'/>
            <h3 style={{color:'#001385'}}>Why do we use it</h3>
        </div>
        

       
        
        
       
    </div>
  )
}



export default Bottomgallery