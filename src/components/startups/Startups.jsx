import "./Startups.css";
import { Link } from "react-scroll";
import StartupsImage from "../../assets/images/startups/StartupsImage.png";

export function Startups() {
  return (
    <div className="Startups">
      <img className="startupsImage" src={StartupsImage} alt="image startups" />

      <div className="textStartups">
        <h1>BEEHIVE</h1>
      </div>
      <div className="text2Startups">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          laudantium molestiae dolor soluta aut sint quae natus, suscipit optio
          odit qui blanditiis doloremque vitae mollitia. Exercitationem est nam
          mollitia iure?
        </p>
      </div>
      <button className="modalButton">
      </button>
    </div>
  );
}
