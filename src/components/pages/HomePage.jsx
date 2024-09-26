import React from 'react';
import Head from '../header/Head';
import "../../App.css";
import Section2img from "../assets/images/rohm-img2 (1).jpg";
import Section3 from '../assets/images/rohomimg3.jpg';
import Section1img from '../assets/images/rohomimg4.jpg';
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
      <Section1 image={Section1img} 
        title="Founder: Kareen Dixon Stewart" 
        textDetails=" Grew up in Spanish Town, St Catherine. My parents instilled in me values of hard work and compassion. Driven by a desire to help others, Kareen pursued a nursing degree, overcoming obstacles along the way. Today, she is a dedicated nurse, known for her empathy and commitment to her patients. Kareen believes in the power of giving back. Her journey from humble beginnings to a community leader is a testament to her resilience and unwavering dedication to making a difference in the lives of others."/>
      </div>
 
      <div className='slideShow'>
      <SlideShow/>
      </div>
     
      <Section1 image={Section2img} 
        title="Back to School Treat" 
        textDetails="For the last 5 years the treat  have been beneficial to me and my family since it has offset many of my financial expenses related  to back to school . I appreciate  your kind gesture  and look forward  for  next year.  Thank you."/>
      
      <Bonner/>

      <Section1 image={Section3} 
        title="Our Mission" 
        textDetails="A Ray Of Hope Outreach Ministries is dedicated to providing to children and families in Jamaica by providing; education supplies, food, and clothing. We fulfill our mission by spreading the love and word of Jesus Christ to all."/>
      
        <Bottomgallery/>
     
      </div>
     
    </div>
  )
}

export default HomePage
