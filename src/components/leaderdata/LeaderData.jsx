import "./LeaderData.css";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function LeaderData() {
  const [leader, setLeader] = useState([])
  const [err, setErr] = useState([])
  
  useEffect(() => {
		axios.get('/server/fisweek/lideres')
		.then((response) => {
			setLeader(response.data)
		}).catch((err) => {
			setErr(err)
		})

	}), []
  
  return (
    <div className="leaderData">
      <img className="avatarLeader" src={leader.imagem} />
      <img className="panel" src={leader.paineis} />

      <div className="leadersDate">
        <span className="dateDay">{leader.data}</span>
        <span className="dateMonth">{leader.data}</span>
      </div>

      <div className="leadersInfo">
        <h4 className="leaderName">{leader.tratamento}</h4>
        <span className="leaderOffice">{leader.descricao}</span>
      </div>
    </div>
  );
}


