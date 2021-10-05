import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-part">
      <div>
        <h3>Contact Us</h3>
        <br />
        <p>1699 East Woodfield Road</p>
        <p>Schaumburg, IL 9076</p>
        <br />
        <p>p: 53557897904</p>
        <p>p: 89964563642</p>
        <p>Sens Us a Messenger</p>
      </div>
      <div>
        <h3>OVERVIEW</h3>
        <br />
        <p>About</p>
        <p>Services</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h3>HELP</h3>
        <br />
        <p>Help Center</p>
        <p>Authors</p>
      </div>
      <div>
        <h3>OUR COMMUNITY</h3>
        <br />
        <p>Community</p>
        <p>Blogs</p>
        <p>Forums</p>
        <p>Meetups</p>
      </div>
      </div>
      <small style={{textAlign:"center", justifyContent:"center"}}>© 2019 Bootstrapious All rights reserved.</small>
    </div>
    
  );
};

export default Footer;