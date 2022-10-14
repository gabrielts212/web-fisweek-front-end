import "./Leaders.css";

import axios from 'axios';

import { LeaderData } from "../leaderdata/LeaderData";
import { useState } from "react";
import { useEffect } from "react";

export function Leaders() {
  const [leader, setLeader] = useState([])
 
  const returnsLeaders = (value) => {
    
  }

  const leaderFiltered = leader.filter(returnsLeaders);
  const getData = async () => {
    let result = await axios.post("searchNew");
    setLeader(result.data);
  };
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="Leaders" id="leaders">
      <div className="leaderGroup">
        {leaderFiltered.map((leader) => {
            return (
              <LeaderData 
                nome={leader.leaderName}
                descricao={leader.leaderOffice}
                paineis={leader.panel}
                img={leader.avatarLeader}
                dataDia={leader.dateDay}
                dataMes={leader.dateMonth}
              />
            );
          })}
      </div>
      <a href="http://127.0.0.1:5173/fisweek22/#/leaderspage" target="_blank">
        <button className="showLeaders">Ver todos os líderes</button>
      </a>
    </div>
  );
}
