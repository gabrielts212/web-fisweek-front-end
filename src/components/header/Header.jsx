import "./Header.css";

import HeaderFis from "../../assets/images/header/header-fis.png";
import { LanguageSwitcher } from "../languageswitcher";
import { Link } from "react-scroll";
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

  return (
    <div>
      <nav>
        <img className="headerFis" src={HeaderFis} alt="image header" />
        <div className="flagsMenu">
          <LanguageSwitcher />
        </div>
        <div className='menu-btn' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>

        <ul className={click ? "nav ul.open" : "nav ul li a"}>
          <li>
            <a href="#">
              <Link
                to="leaders"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}>
                LÍDERES
              </Link>
            </a>
          </li>

          <li>
            <a href="#">
              <Link
                to="events"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}>
                EVENTOS
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link
                to="schedule"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}>
                PROGRAMAÇÃO
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu} >
                DEPOIMENTOS
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link
                to="startups"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}>
                STARTUPS
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header
