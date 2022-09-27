import "./Leaders.css";

import { LeaderData } from "../leaderData/LeaderData";

export function Leaders() {
  const handleButtonClick = () => {
    
  }

  return (
    <div className="Leaders">
      <div className="leaderGroup">
        <LeaderData />
        <LeaderData />
        <LeaderData />
        <LeaderData />
        <LeaderData />
        <LeaderData />
      </div>

      <button className="showLeaders" onClick={handleButtonClick}>Ver todos os líderes</button>
    </div>
  );
}
