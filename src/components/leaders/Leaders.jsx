import { LeaderData } from "../leaderdata/LeaderData";

import "./Leaders.css";

export function Leaders() {
  return (
    <div className="Leaders" id="leaders">
      <div className="leaderGroup">
        <LeaderData />
        <LeaderData />
        <LeaderData />
      </div>
      
      <a href="/fisweek22/#/leaderspage" target="_blank">
        <button className="showLeaders">Ver todos os líderes</button>
      </a>
    </div>
  );
}

