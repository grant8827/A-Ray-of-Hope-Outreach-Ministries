import React from "react";

const ContactForm = () => {
  return (
    <form style={{justifyContent:'center', textAlign:'left', width:'100%'}} action="https://formsubmit.co/grant88271@email.com" method="POST">
   
          <input style={{marginRight:'20px', width:'150px', padding:'5px'}}  placeholder="First Name"  type="text" name="FirstName" />
    
          <input style={{width:'150px', padding:'5px'}} placeholder="Last Name" ype="text" name="FirstName" /><br></br><br></br>
          
          <input style={{marginRight:'20px', width:'100%', padding:'5px' }} placeholder="Email" type="text" name="Email" /><br></br><br></br>
        <textarea style={{marginRight:'20px', width:'100%',height:'150px', padding:'5px' }} placeholder="Enter text here..." typeof="text" name="message "></textarea><br></br><br></br>
      <input style={{width:'100%', padding:'5px', borderRadius:'20PX', border:'none', backgroundColor:'rgb(255, 193, 5)'}} type="submit" name="submit" value="Submit" />
    </form>
  );
};
export default ContactForm;

