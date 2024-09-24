import React from 'react'

function Section1(props) {
  return (
    <div>
        <div className='sectionHome' >
            <div className='sectionDetails'><img style={{width:'100%',   borderRadius:'20px', boxShadow:''}} src={(props.image)} alt='S-Image'/></div>
            <div className='sectionDetails' >
                <h3 style={{marginBottom:'20PX', fontSize:'25px', color:'#001385'}}>{props.title}</h3>
                <p style={{lineHeight:'30PX', }}>{props.textDetails}</p>
            </div>
        </div>
    </div>
  )
}

export default Section1