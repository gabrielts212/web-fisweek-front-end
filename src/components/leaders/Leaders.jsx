import { Row } from "react-bootstrap";
import { LeaderData } from "../leaderdata/LeaderData";

import "./Leaders.css";

export function Leaders() {
  return (
    <div>
        <LeaderData 
          input={""}
          showAll={false}
        />
    {/* // <div className="Leaders" id="leaders">
    //   <div className="leaderGroup">
      // </div>
    // </div> */}

      <Row>
        <a href="/fisweek22/#/leaderspage" target="_blank">
          <button className="showLeaders">Ver todos os líderes</button>
        </a> 
      </Row>
    </div>
  );
}