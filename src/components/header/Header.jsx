import "./Header.css";
import HeaderFis from "../../assets/images/header/header-fis.png";
import { LanguageSwitcher } from "../languageswitcher";
import { Link } from "react-scroll";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="imageFis">
          <a href="/fisweek22/#/">
            <img className="headerFis" src={HeaderFis} alt="image header" />
          </a>
        </div>
        <div className="flags">
          <LanguageSwitcher />
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>

        <ul className={click ? "navMenu active" : "navMenu"}>
          <li className="navItem">
            <a href="#">
              <Link
                to="leaders"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                {t("header.list1")}
              </Link>
            </a>
          </li>

          <li className="navItem">
            <a href="#">
              <Link
                to="events"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                {t("header.list2")}
              </Link>
            </a>
          </li>
          <li className="navItem">
            <a href="#">
              <Link
                to="schedule"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                {t("header.list3")}
              </Link>
            </a>
          </li>
          {/* <li className="navItem">
            <a href="#">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                {t("header.list4")}
              </Link>
            </a>
          </li>
          <li className="navItem">
            <a href="#">
              <Link
                to="Startups"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                {t("header.list5")}
              </Link>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
