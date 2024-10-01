import React from 'react'

function Datagallery(props) {
  return (
    <div>
      <div style={{margin:'20px'}}>
        <img style={{width:'300px'}} src={props.imagedata}/>
      <p>{props.gallerytext}</p>
      </div>
     
    </div>
  )
}

export default Datagallery
