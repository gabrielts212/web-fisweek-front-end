import "./Leaders.css";

import { LeaderData } from "../leaderdata/LeaderData";
import { useState } from "react";

export function Leaders() {
  const [showLeaders, setShowLeaders] = useState(false)

  const handleButtonClick = () => {
    setShowLeaders(true)
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

      { showLeaders ? <LeaderData /> : null }
      </div>

      <button className="showLeaders" onClick={handleButtonClick} hidden={showLeaders}>Ver todos os líderes</button>
    </div>
  );
}
