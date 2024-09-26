import React from 'react'

function Section1(props) {
  return (
    <div>
        <div className='sectionHome' >
            <div ><img style={{width:'auto', height:'400PX',  borderRadius:'20px', boxShadow:'', margin:'20px'}} src={(props.image)} alt='S-Image'/></div>
            <div className='sectionDetails' >
                <h3 style={{marginBottom:'20PX', marginRight:'50px', fontSize:'25px', color:'#001385'}}>{props.title}</h3>
                <p style={{lineHeight:'30PX', margin:'20px' }}>{props.textDetails}</p>
            </div>
        </div>
    </div>
  )
}
export default Section1