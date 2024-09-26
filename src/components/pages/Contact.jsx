import React from 'react';
import bgImage from '../assets/images/rohomimg12.jpg';
import ContactForm from '../ComponentItems/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div style={{width:'100%', height:'100%',  justifyContent:'center'}}>
      <div style={{width: "100%",
  height: "400px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor:'rgba(0, 0, 0, 0.450)',
  backgroundBlendMode: 'overlay',
  backgroundImage: "url(" + bgImage + ")"}}>
<h3 style={{textAlign:'center', position:'relative', top:'250px', fontSize:'35px' }}>Contact</h3>
      </div>
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
      <div style={{width:'auto', padding:'50px',  margin:'20px'}}>
      <spam style={{margin:'10px', fontSize:'20px', }}><FontAwesomeIcon style={{marginRight:'10px', fontSize:'20px' }} icon={faPhone} />772-882-0086</spam><br></br><br></br><br></br>
      <spam style={{margin:'10px'}}><FontAwesomeIcon style={{marginRight:'10px'}} icon={faEnvelope} />Arayofhopeoutreachmini@gmail.com</spam>
      </div>
      
      <div style={{width:'500px',margin:'20px', padding:'50px', backgroundColor:'antiquewhite', borderRadius:'20PX'}}>
     
      <ContactForm/>
      </div>
    
    </div>
    </div>
  )
}
export default Contact