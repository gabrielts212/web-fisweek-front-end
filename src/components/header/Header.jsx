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
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link ms-5" href="#">
                LÍDERES <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link ms-5" href="#">
                EVENTOS <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link ms-5" href="#">
                PROGRAMAÇÃO <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active ms-5">
              <a class="nav-link" href="#">
                DEPOIMENTOS <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                STARTUPS <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
