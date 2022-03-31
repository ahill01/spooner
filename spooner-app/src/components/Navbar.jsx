import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  './navbar.css'



function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
 const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu"); 

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
       Spooner
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
          <NavLink  className="nav_link" exact to="/" />
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/reviews" className="nav__link">
          <NavLink className="nav_link" exact to="/reviews" />
            Reviews
          </a>
        </li>
        <li className="nav__item">
          <a href="/new" className="nav__link">
          <NavLink className="nav_link" exact to="/new" />
            Add a Review
          </a>
        </li>
        
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;