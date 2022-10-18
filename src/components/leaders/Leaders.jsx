import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { LeaderData } from "../leaderdata/LeaderData";

import "./Leaders.css";

export function Leaders() {
  const [leader, setLeader] = useState([])
  
  useEffect(() => {
		axios.get('https://fis.org.br/server/fisweek/lideres')
		.then((response) => {
			setLeader(response.data.leader)
		}).catch((err) => {
			console.error(err)
		})

	}), []

  return (
    <div className="Leaders" id="leaders">
      <div className="leaderGroup">
        {leader.map((leader, key ) => {
            return (
              <div key={key}>
                 <LeaderData
                  nome={leader.leaderName}
                  descricao={leader.leaderOffice}
                  paineis={leader.panel}
                  img={leader.avatarLeader}
                  dataDia={leader.dateDay}
                  dataMes={leader.dateMonth}
                />
              </div>
            );
          })}
      </div>
      <a href="http://127.0.0.1:5173/fisweek22/#/leaderspage" target="_blank">
        <button className="showLeaders">Ver todos os líderes</button>
      </a>
    </div>
  );
}

