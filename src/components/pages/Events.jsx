import React from 'react'
import bgImage from '../assets/images/IMG_0090-scaled.webp';

function Events() {
  return (
    <div style={{width:'100%', height:'100%',  justifyContent:'center'}}>
    <div style={{ width: "100%",
  height: "400px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  backgroundImage: "url(" + bgImage + ")"}}>

    </div>
  <h3>hello events</h3>
  </div>
  )
}

export default Events