import React from 'react'
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/rohomimgimg13.jpg';
import DonateCards from '../ComponentItems/DonateCards';
function Donate() {
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
<h3 style={{textAlign:'center', position:'relative', top:'250px', fontSize:'35px' }}>Donate</h3>
    </div>
  <div className="donate" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
    <div style={{margin:'30px'}}>
      <h3 style={{fontSize:'25px', marginBottom:'20px'}}>Donate Today</h3>
      <p>Through community engagement and collaboration, we strive to ensure that every child has the opportunity to thrive, and every family can achieve stability and resilience.
</p>
    </div>
    <DonateCards title="PAYPAL" message="Click the link below to donate with paypal" button= {<Link to="/paypaldonate"><button>Paypal</button></Link>} />
    <DonateCards title="ZELLE" message="To donate with Zelle used the email below" button="arayofhopeoutreachmini@gmail.com "/>
    <DonateCards title="Other Ways to Donate" message=" If those links are not apply to you contact us for more ways to donate" button={<Link style={{textDecoration:'none', color:'black'}} to="/contact">Contact</Link>} email="Email: arayofhopeoutreachmini@gmail.com" tel="Tell: 772-882-0086"/>
  </div>
  </div>
    
  )
}
export default Donate