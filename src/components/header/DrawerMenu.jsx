import React from 'react'
import Drawer from 'react-modern-drawer';
import { Link } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMultiply } from '@fortawesome/free-solid-svg-icons';

function DrawerMenu() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const closeDrawer = () => {
        setIsOpen(false)
    }
    let menuBar = (<FontAwesomeIcon style={{fontSize:'28px', transitionTimingFunction: 'ease-in-out'}}  icon={faBars } />)
    let closeMenu = (<FontAwesomeIcon style={{fontSize:'30px', transitionTimingFunction: 'ease-in-out'}} icon={faMultiply  } />)
   
  return (
    <div>
 <button className="togglebtn" onClick={toggleDrawer}>{isOpen ? closeMenu :  menuBar}</button>
            <Drawer style={{backgroundColor:'#001385', }}
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div style={{textAlign:'start', margin:'10px' }}>
                <h2 style={{fontSize:'20px', marginBottom:'20px'}}>A Ray of Hope Outreach Ministries inc</h2>
                <ul className='DrawerLinks'>
<li onClick={closeDrawer} ><Link  to='/'>HOME</Link></li>
<li onClick={closeDrawer}  ><Link  to="/about" >ABOUT</Link></li>
<li onClick={closeDrawer}  ><Link  to='/events' >OUR WORK</Link></li>
<li onClick={closeDrawer}  ><Link  to='/contact'>CONTACT</Link></li>


            </ul>
            <Link to="/donate"><button style={{marginTop:'10px'}}>Donate</button></Link>
                </div>
            </Drawer>
    </div>
  )
}



export default DrawerMenu