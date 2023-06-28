import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Admin from "./pages/admin/admin";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <i class="fa-solid fa-horse-head fa-beat-fade"></i>
             */}
            <img src="nini.png" alt="logo" className="newImage" />
            DRMZ Systems
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#admin" className="nav-links" onClick={closeMobileMenu}>
                Admin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
