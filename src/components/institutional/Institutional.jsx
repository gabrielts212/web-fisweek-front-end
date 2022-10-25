import "./Institutional.css";
import { Link } from "react-scroll";

import BackgroundVideo from "../../assets/images/institutional/backgroundvideo.png";
// import BackgroundVideo2 from "../../assets/images/institutional/backgroundvideo2.png";

export function Institutional() {
  return (
    <div className="videoBackground">
      {/* <img className="background" src={BackgroundVideo} /> */}
      {/* <img className="" src={BackgroundVideo2} /> */}
      <h1>
        Vamos transformar o <br /> universo da saúde juntos?
      </h1>
      <video className="video">
        <source src="VIDEOAQUI.mp4" type="video/mp4" />
      </video>

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
