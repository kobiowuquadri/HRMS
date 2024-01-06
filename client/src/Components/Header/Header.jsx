import { useState } from "react";
import menuIcon from "../.././assets/icon-menu.svg";
import closeIcon from "../.././assets/icon-close.svg";
import "./header.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleToggleRegsitration = () => {
    setToggleRegister(!toggleRegister);
    setShowLightbox(!showLightbox);
  };


  return (
    <>
      <div id="navcard" className={toggle ? "show" : ""}>
        <img id="close" src={closeIcon} onClick={() => setToggle(false)}></img>
        <ul>
          <Link to="/about">
            <a href="#about">About</a>
          </Link>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <Link to={'/register'}>
                Register
            </Link>
            <Link to={'/login'}>
              Login
            </Link>
        </ul>
      </div>

      <header className="header_home">
          <a id="logo" href="/">
          DHireventures
          </a>

        <nav id="navbar">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <Link to={'/register'}>
                Register
            </Link>
            <Link to={'/login'}>
              Login
            </Link>
          </ul>
        </nav>
        <img
          src={menuIcon}
          onClick={() => setToggle(true)}
          id="menuBar"
          alt=""
        />
      </header>
    </>
  );
}

export default Header;
