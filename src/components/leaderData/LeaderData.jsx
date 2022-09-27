import "./LeaderData.css";

import AvatarLeader from "../../assets/images/leaders/avatar-leader.png";
import PinkElement from "../../assets/images/leaders/pink-element.png";

export function LeaderData() {
  return (
    <div className="leaderData">
      <img className="avatarLeader" src={AvatarLeader} />
      <img className="pinkElement" src={PinkElement} />

      <div className="leadersDate">
        <span className="dateDay">07</span>
        <span className="dateMonth">08</span>
      </div>

      <div className="leadersInfo">
        <h4 className="leaderName">Nome Completo</h4>
        <span className="leaderOffice">Cargo / Empresa</span>
      </div>
    </div>
  );
}
