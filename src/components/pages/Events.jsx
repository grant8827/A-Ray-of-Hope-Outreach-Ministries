import React from 'react'
import bgImage from '../assets/images/rohomimg11.jpg';
import Datagallery from '../model/Datagallery';
import image1 from '../assets/images/rohomimg11.jpg';
import image2 from '../assets/images/rohomimg10.jpg';
import image3 from '../assets/images/rohomimg12.jpg';
import image4 from '../assets/images/rohomimgimg13.jpg';
import image5 from '../assets/images/rohomimg14.jpg';
import image6 from '../assets/images/rohomimg15.jpg';
import image7 from '../assets/images/rohomimg16.jpg';
import image8 from '../assets/images/rohomimg17.jpg';
import image9 from '../assets/images/rohomimg18.jpg';
import image10 from '../assets/images/rohomimg19.jpg';
import image11 from '../assets/images/rohomimg20.jpg';
import image12 from '../assets/images/rohomimg9.jpg';

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
    <div style={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
    <Datagallery imagedata={image1} gallerytext="Funday for the children"/>
    <Datagallery imagedata={image2} gallerytext="Funday for the children"/>
    <Datagallery imagedata={image3} gallerytext="Funday for the children"/>
    <Datagallery imagedata={image4} gallerytext="children waiting for lunch"/>
    <Datagallery imagedata={image6} gallerytext="Spreading the love"/>
    <Datagallery imagedata={image8} gallerytext="community coming together"/>
    <Datagallery imagedata={image10} gallerytext="Cake for the children"/>
    <Datagallery imagedata={image12} gallerytext="children waiting for lunch"/>
    <Datagallery imagedata={image5} gallerytext="Funday for the children"/>
    <Datagallery imagedata={image7} gallerytext="Cake for the children"/>
    <Datagallery imagedata={image9} gallerytext="Cotton candy for the children"/>
    <Datagallery imagedata={image11} gallerytext="Popcorn been serve"/>
    </div>
    
  </div>
  )
}

export default Events