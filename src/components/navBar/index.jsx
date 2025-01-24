import React, { useState } from 'react';
import { FaHome, FaBars } from 'react-icons/fa'; // Font Awesome's home icon
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import './styles.scss';

const data = [
  { label: "Home", to: "/" },
  { label: "About me", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleMenuItemClick = () => {
    setToggleIcon(false); // Close the menu when a menu item is clicked
  };

  return (
    <div>
      <nav className={`navbar ${toggleIcon ? 'active-menu' : ''}`}>
        {/* Dim background overlay */}
        <div
          className="navbar_overlay"
          onClick={handleToggleIcon} // Close menu if overlay is clicked
        ></div>

        {/* Navbar content */}
        <div className="navbar_container">
          <Link to="/" className="navbar_container_logo">
            <FaHome size={32} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar_container_menu_items">
              <Link
                className="navbar_container_menu_items_links"
                to={item.to}
                onClick={handleMenuItemClick} // Close the menu on click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
