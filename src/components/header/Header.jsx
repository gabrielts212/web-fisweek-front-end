import "./Header.css";
import HeaderFis from "../../assets/images/header/header-fis.png";
import bg from "../../assets/images/header/bg.png";
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {

  return (
    <div className="background-header" style={{ backgroundImage: `url(${bg})` }}>

      <nav class="navbar navbar-expand-lg navbar bg">
        <img class="headerFis" src={HeaderFis} alt="image header" />
        <LanguageSwitcher />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                LÍDERES <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                EVENTOS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                PROGRAMAÇÃO <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                DEPOIMENTOS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                STARTUPS <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
}

