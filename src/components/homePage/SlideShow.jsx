import React from 'react'
import { Slide, } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import slide1 from '../assets/images/upcomingeventflyer.jpg';
import '../styles.css';

function SlideShow() {
  
  return (
    <div style={{ boxShadow: '0 0 15px rgba(0,0,0,0.75)'}}>
        <h3 style={{color:'var(--black)', fontSize:'22', marginBottom:'10px'}}>Upcoming Events</h3>
         <Slide>
            <div className="each-slide-effect">
                <div style={{background: 'var(--secondary'}}>
                    <img className='slideImg' src={slide1} alt='slideImage'/>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ background: 'var(--secondary'}}>
                <img className='slideImg'src={slide1} alt='slideImage'/>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{background: 'var(--secondary' }}>
                <img className='slideImg' src={slide1} alt='slideImage'/>
                </div>
            </div>
        </Slide>
    </div>
  )
}

export default SlideShow