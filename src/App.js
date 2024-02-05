import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login';
import Register from './Components/Register';
import { useState } from 'react';
import { BrowserRouter as Router, useNavigate, Route, Routes, Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import Home from './Home';
function App() {
  const [isFixedTop, setIsFixedTop] = useState(false);
  const handleLoginClick = () => {
    setIsFixedTop(true);
  };
  return (
    <Router>
    <div>
      <nav isFixedTop={isFixedTop} className='navbar navbar-expand-lg bg-transparent navbar-light bg-light fixed-top'>
        <div className='container-fluid'>
          <Link to="/" className='navbar-brand'>TaskManager</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' as={Link} aria-current="page" to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' as={Link}>Features</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' as={Link}>Pricing</Link>
              </li>
            </ul>
            <Link to="/Login" className='btn' style={{fontFamily: 'cursive', marginRight: '2rem', color: '#e06666', fontSize: '14px', borderRadius: '10px'}}>Signup</Link>
            <div className='vl'></div>
            <Link to="/Register" className='btn' style={{fontFamily: 'cursive', marginRight: '2rem', color: '#007bff', fontSize: '14px', borderRadius: '10px'}}>Signin</Link>
          </div>
        </div>
      </nav> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login handleLoginClick={handleLoginClick} />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
