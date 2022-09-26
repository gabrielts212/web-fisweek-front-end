import "./Leaders.css";

import { LeaderData } from "../leaderData/LeaderData";

export function Leaders() {
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
    </div>
  );
}
