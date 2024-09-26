import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Aboutus from './components/pages/Aboutus';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import Navbar from './components/header/Navbar';
import Footer from './components/Footer';
import Donate from './components/pages/Donate';
import PaypalDonate from './components/ComponentItems/PaypalDonate';
function App() {
  return (
    <Router>
<Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/paypalDonate' element={<PaypalDonate/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}
export default App;
