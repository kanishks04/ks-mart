import React from 'react';
import './App.css';

function App() {
  return (
<div>
      <header className="header">

        <div className="logo">KS-mart</div>
        
        <nav className="headerbu">
          <div>Home</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Sign Up</div>
        </nav>
      </header>








      <main className="main-content">
        <div className='boxes'>
          <div className='box1'></div>
          <div className='box2'></div>
          <div className='box3'></div>
        </div>


        <div className='boxes'>
          <div className='box1'></div>
          <div className='box2'></div>
          <div className='box3'></div>
        </div>


        <div className='boxes'>
          <div className='box1'></div>
          <div className='box2'></div>
          <div className='box3'></div>
        </div>
      </main>




      <footer className="footer-content">
        <p>&copy; {new Date().getFullYear()} KS-mart. All rights reserved.</p>

        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>

        <ul className="social-media">
          <li><a href="https://www.twitter.com" >Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.linkedin.com" >LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
