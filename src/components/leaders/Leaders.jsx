import "./Leaders.css";

import { LeaderData } from "../leaderData/LeaderData";
import { useState } from "react";

export function Leaders() {

  const handleButtonClick = () => {
    // console.log('Clicou!')
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
