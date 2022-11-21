import React, { useState } from "react";
import Hamburger from "/icons/Hamburger-menu.svg";
import Close from "/icons/Close icon.svg";
import Logo from "/logo/Logo-coloured.png";
import LogoMobile from "/logo/Logo-mobile.png";
import "../../styles/sass/css/NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    document.body.classList.toggle("hidden");
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="logo-wrapper">
        <picture>
          <source media="(max-width: 469px)" srcSet={LogoMobile} />
          <source media="(min-width: 470px)" srcSet={Logo} />
          <img src={Logo} alt="Resource Edge logo" />
        </picture>
      </div>

      <div className="hamburger-icon" onClick={handleMenu}>
        {showMenu ? (
          <img src={Close} alt="close menu" />
        ) : (
          <img src={Hamburger} alt="hamburger menu" />
        )}
      </div>

      <ul className={`${showMenu ? "nav-links mobile-nav" : "nav-links"}`}>
        <li onClick={handleMenu}>
          <a href="features">Features</a>
        </li>
        <li onClick={handleMenu}>
          <a href="about">About</a>
        </li>
        <div className="user-auth">
          <a href="signup" className="sign-up">
            Sign Up
          </a>
          <a id="nav-btn" href="signin" className="sign-in">
            Sign In
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
