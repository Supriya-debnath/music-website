
import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
 
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About</li>
                </Link>
                <Link to="/service" className="items">
                  <li>Services</li>
                </Link>
                <Link to="contact" className="items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
