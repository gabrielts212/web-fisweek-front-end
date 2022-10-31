import "./Institutional.css";
import { Link } from "react-scroll";

import { useTranslation } from 'react-i18next';
import BackgroundVideo from "../../assets/images/institutional/backgroundVideo.png";

export function Institutional() {
  const { t } = useTranslation();

  return (
    <div className="background">
      
      <img className="videoImage" src={BackgroundVideo} />

      <h1>{t("institutional.title")}</h1>

      <iframe
        className="iframeVideo"
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/5MqUYpfN45o"
        title="Conheça a Iniciativa FIS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        scolling="no"
      ></iframe>


      <div className="videoButton">
        <a href="#">
          <Link
            to="registrationInfo"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="videobuttonLink">{t("institutional.iWantToSuscribe!")}</button>
          </Link>
        </a>
      </div>
    </div>
  );
}
