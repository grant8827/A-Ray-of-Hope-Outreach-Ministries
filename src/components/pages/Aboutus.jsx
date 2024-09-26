import React from 'react'
import bgImage from '../assets/images/rohomimg10.jpg';
function Aboutus() {
  return (
    <div style={{width:'100%', height:'100%',  justifyContent:'center'}}>
      <div style={{ width: "100%",
  height: "400px",
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor:'rgba(0, 0, 0, 0.450)',
  backgroundBlendMode: 'overlay',
  backgroundImage: "url(" + bgImage + ")"
}}>
<h3 style={{textAlign:'center', position:'relative', top:'250px', fontSize:'35px' }}>ABOUT US</h3>
      </div>
      <div className='about' >
      <div className='aboutText'>
        <h3 style={{color:'var(--headText)', marginBottom:'10PX'}}>Vision Statement</h3>
        <p>A Ray of Hope Outreach Ministries aims to empower families through access to resources, education, and opportunities, fostering a brighter future where every child can reach their maximum potential and every family can flourish.</p>
      </div>
      <div className='aboutText'>
        <h3 style={{color:'var(--headText)', marginBottom:'10PX'}}>Mission Statement</h3>
        <p>A Ray Of Hope Outreach Ministries is dedicated to providing to children and families in Jamaica by providing; education supplies, food, and clothing. We fulfill our mission by spreading the love and word of Jesus Christ to all.</p>
      </div>
      <div className='aboutText'>
        <h3 style={{color:'var(--headText)', marginBottom:'10PX'}}>Purpose</h3>
        <p>A ray of hope ministries is dedicated to supporting families and children in need, focusing on uplifting low-income communities. Since 2014, we have providing essential resources such as food, clothing, educational materials and access to programs that promote health, education and personal development to hundreds. By fostering a supportive environment and connecting families with vital services, we aim to empower individuals and create sustainable pathways for a brighter future. Through community engagement and collaboration, we strive to ensure that every child has the opportunity to thrive, and every family can achieve stability and resilience.</p>
      </div>
      </div>
      
    
    </div>
  )
}

export default Aboutus