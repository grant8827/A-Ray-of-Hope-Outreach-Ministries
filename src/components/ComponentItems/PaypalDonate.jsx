import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import bgImage from '../assets/images/rohomimgimg13.jpg'
function PaypalDonate() {
    const initialOptions = {
        clientId: "gregorygrant99@yahoo.com",
        currency: "USD",
        intent: "capture",
    };
  return (
    <div>
    <div style={{width: "100%",
    height: "400px",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'rgba(0, 0, 0, 0.450)',
    backgroundBlendMode: 'overlay',
    backgroundImage: "url(" + bgImage + ")"}}>
  <h3 style={{textAlign:'center', position:'relative', top:'250px', fontSize:'35px' }}>Paypal</h3>
        </div>
    <div style={{width:'100%',justifyContent:'center', alignItems:'center', margin:'50px'}}>
         <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
        </PayPalScriptProvider>
    </div>
    </div>
  )
}
export default PaypalDonate