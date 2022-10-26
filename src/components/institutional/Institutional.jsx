import "./Institutional.css";
import { Link } from "react-scroll";

import BackgroundVideo from "../../assets/images/institutional/backgroundvideo.png";
// import BackgroundVideo2 from "../../assets/images/institutional/backgroundvideo2.png";

export function Institutional() {
  return (
    <div className="background">
      {/* <img className="" src={BackgroundVideo2} /> */}
      <img className="videoImage" src={BackgroundVideo} />

      <h1>
        Vamos transformar o <br /> universo da saúde juntos?
      </h1>

      <iframe
        className="iframeVideo"
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/FzihvtVLOxY"
        title="YouTube video player"
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
            <button className="videobuttonLink">Quero me cadastrar</button>
          </Link>
        </a>
      </div>
    </div>
  );
}
