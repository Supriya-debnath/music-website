import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
           <div className="header">
               <Link to="/home">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/service">Services</Link>
               <Link to="/contact">Contact Us</Link>
           </div>
    );
};

export default Header;