import React from 'react'

function DonateCards(props) {
  return (
    <div>

       <div className="donateCard" style={{width:'350px', height:'300px', border:'1px solid black' , borderRadius:'10PX', padding:'10px', backgroundColor:'var(--primary)', margin:'50px', }}>
<h3 style={{fontSize:'25px', margin:'20px'}}>{props.title}</h3>
<p style={{ margin:'20px', color:'white'}}>{props.message}</p>
<button style={{ margin:'20px'}}>{props.button}</button>
<p style={{ margin:'20px', color:'white'}}>{props.email}</p>
<p style={{ margin:'20px', color:'white'}}>{props.tel}</p>
       </div>

    </div>
  )
}

export default DonateCards