import "./Header.css";

import HeaderFis from "../../assets/images/header/header-fis.png";
import { LanguageSwitcher } from "../languageswitcher";
import { Link } from "react-scroll";

export function Header() {
  return (
    <div>
      <nav>
        <img className="headerFis" src={HeaderFis} alt="image header" />
        <div className="flagsMenu">
          <LanguageSwitcher />
        </div>
        <div className="menu-btn">
          <i className="fa fa-bars fa-2x" onclick="menuShow()"></i>
        </div>

        <ul className="options">
          <li>
            <a href="#">
                <Link to="leaders" spy={true} smooth={true} offset={50} duration={500}>LÍDERES</Link> 
            </a>
          </li>
          <li>
            <a href="#">
                <Link to="events" spy={true} smooth={true} offset={50} duration={500}>EVENTOS</Link>
            </a>
          </li>
          <li>
            <a href="#">
                <Link to="schedule" spy={true} smooth={true} offset={50} duration={500}>PROGRAMAÇÃO</Link>
            </a>
          </li>
          <li>
            <a href="#">
                <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500}>DEPOIMENTOS</Link>
            </a>
          </li>
          <li>
            <a href="#">
                <Link to="startups" spy={true} smooth={true} offset={50} duration={500}>STARTUPS</Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
