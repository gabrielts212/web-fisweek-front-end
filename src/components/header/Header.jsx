import "./Header.css";
import HeaderFis from "../../assets/images/header/header-fis.png";
import { LanguageSwitcher } from "../languageswitcher";

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
  function menuShow() {
      if (ul.classNameList.contains('open')) {
          ul.classNameList.remove('open');
      }else{
          ul.classNameList.add('open');
      }
  }

export function Header() {
  return (
    <div>
<body>
    <nav>

        <img className="headerFis" src={HeaderFis} alt="image header" />
        <div className="flagsMenu">
        <LanguageSwitcher />
        </div>
        <div className="menu-btn">
            <i className="fa fa-bars fa-2x" onclick="menuShow()"></i>
        </div>
        
        <ul className="options">
            <li> <a href="#"> LÍDERES </a> </li>
            <li> <a href="#"> EVENTOS</a> </li>
            <li> <a href="#"> PROGRAMAÇÃO</a> </li>
            <li> <a href="#"> DEPOIMENTOS </a> </li>
            <li> <a href="#"> STARTUPS </a> </li>
        </ul>

    </nav>
    <script src="main.js"></script>
</body>
</div>
 );
  }