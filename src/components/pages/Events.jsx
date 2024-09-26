import React from 'react'
import bgImage from '../assets/images/rohomimg11.jpg';

function Events() {
  return (
    <div style={{width:'100%', height:'100%',  justifyContent:'center'}}>
    <div style={{ width: "100%",
  height: "400px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor:'rgba(0, 0, 0, 0.450)',
  backgroundBlendMode: 'overlay',
  backgroundImage: "url(" + bgImage + ")"}}>
<h3 style={{textAlign:'center', position:'relative', top:'250px', fontSize:'35px' }}>Our Work</h3>
    </div>
  
  </div>
  )
}

export default Events