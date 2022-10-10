import "./Leaders.css";

import { LeaderData } from "../leaderdata/LeaderData";
import { AllTheLeaders } from "../alltheleaders/allTheLeaders";

export function Leaders() {
  return (
    <div className="Leaders" id="leaders">
      <div className="leaderGroup">
        <LeaderData />
        <LeaderData />
        <LeaderData />
        <LeaderData />
        <LeaderData />
        <LeaderData />
      </div>

      <button className="showLeaders">Ver todos os líderes</button>
    </div>
  );
}
