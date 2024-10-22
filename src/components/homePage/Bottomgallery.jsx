import React from 'react'
import image1 from '../assets/images/rohomimg17.jpg';
import image2 from '../assets/images/rohomimg16.jpg';
import image3 from '../assets/images/rohomimg15.jpg';
import image4 from '../assets/images/rohomimg10.jpg';
function Bottomgallery(props) {
  return (
    <div style={{marginTop:'70px', width:'fitContent', height:'100%',display:'flex', flexWrap: 'wrap', padding:'30px', justifyContent:'center', alignItems:'center' }}>
         
        <div style={{alignItems:'center', textAlign:'center',margin:'30px' }}>
            <img style={{ width:'300PX', height:'300PX', borderRadius:'30%'}} src={image1} alt='G-Image'/>
            <h3 style={{color:'#001385', margin:'10px'}}>Community get together</h3>
        </div>
        
        <div style={{alignItems:'center', textAlign:'center', margin:'30px'}}>
            <img style={{ width:'300PX', height:'300PX', borderRadius:'30%'}} src={image2} alt='G-Image'/>
            <h3 style={{color:'#001385'}}>Hot meal provided for children and families</h3>
        </div>

        <div style={{alignItems:'center', textAlign:'center',  margin:'30px'}}>
            <img style={{ width:'300PX', height:'300PX', borderRadius:'30%'}} src={image3} alt='G-Image'/>
            <h3 style={{color:'#001385'}}>Spread the love</h3>
        </div>

        <div style={{alignItems:'center', textAlign:'center',  margin:'30px'}}>
            <img style={{ width:'300PX', height:'300px', borderRadius:'30%'}} src={image4} alt='G-Image'/>
            <h3 style={{color:'#001385'}}>Funday for the childern</h3>
        </div>
       
    </div>
  );
}
export default Bottomgallery