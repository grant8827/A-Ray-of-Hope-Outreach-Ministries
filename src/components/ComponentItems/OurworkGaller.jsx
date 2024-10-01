import React from 'react';
import "../../components/styles.css"
import ImageGallery from "react-image-gallery";
import "react-multi-carousel/lib/styles.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";// requires a loader
import {data} from '../model/data';
import image1 from '../assets/images/rohm-img2.jpg'

function OurworkGaller() {
  const images = [
    {
      original: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg3.727fdb7c52ecc2d93f81.jpg",
      thumbnail: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg3.727fdb7c52ecc2d93f81.jpg",
    },
    {
      original: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg17.6d89aaf1896472aae535.jpg",
      thumbnail: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg17.6d89aaf1896472aae535.jpg",
    },
    {
      original: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg16.f2b229e298e59b633939.jpg",
      thumbnail: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg16.f2b229e298e59b633939.jpg",
    },
    {
      original: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg15.649e1924c12247a83e23.jpg",
      thumbnail: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg15.649e1924c12247a83e23.jpg",
    },
    {
      original: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg10.afffcd4d773eb0b6f288.jpg",
      thumbnail: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohomimg10.afffcd4d773eb0b6f288.jpg",
    },
    {
      original: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohm-img2%20(1).c486778fa83467cb5923.jpg",
      thumbnail: "https://arayofhopeoutreachministriesinc.netlify.app/static/media/rohm-img2%20(1).c486778fa83467cb5923.jpg",
    },
    
  ];
 
  return (
    <div >
      <div style={{margin:'20px', width:'auto', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
      <ImageGallery items={images} />
      </div>
      <div className='galleryGrid'>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
        <div className='galleryItems'></div>
      </div>
    </div>
  )
}

export default OurworkGaller








class MyGallery extends React.Component {
  render() {
    return 
  }
}