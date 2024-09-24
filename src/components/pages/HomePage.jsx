import React from 'react';
import Head from '../header/Head';
import "../../App.css";
import pageImage1 from "../assets/images/helpthechildren.png";
import SlideShow from '../homePage/SlideShow';
import Section1 from '../homePage/Section1';
import Bonner from '../homePage/Bonner';
import Bottomgallery from '../homePage/Bottomgallery';
function HomePage() {
  
  return (
    <div >
        <Head/>
     
      <div className='pagescontainer'>
      <div style={{marginTop:'50px'}}>
      <Section1 image={pageImage1} 
        title="What is Lorem Ipsum?" 
        textDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      </div>
 
      <div className='slideShow'>
      <SlideShow/>
      </div>
     
      <Section1 image={pageImage1} 
        title="What is Lorem Ipsum?" 
        textDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      
      <Bonner/>

      <Section1 image={pageImage1} 
        title="What is Lorem Ipsum?" 
        textDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      
        <Bottomgallery/>
     
      </div>
     
    </div>
  )
}

export default HomePage
