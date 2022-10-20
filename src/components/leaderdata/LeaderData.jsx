import "./LeaderData.css";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export function LeaderData() {
  const [leader, setLeader] = useState([]);
  const [date, setDate] = useState([]);
  const [err, setErr] = useState([])

  useEffect(() => {
    axios
      .get("/server/fisweek/lideres")
      .then((response) => {
        setLeader(response.data);
      })
      .catch((err) => {
        setErr(err);
      });
  }),
 
  useEffect(() => {
    axios
      .get("/server/fisweek/painel/buscar")
      .then((response) => {
        setDate(response.data);
      })
      .catch((err) => {
        setErr(err);
    });
  }), [];

  return (
    <div>
      {leader.map((leader, key) => {
        return (
          <div className="leaderData" key={key}>
            <img className="avatarLeader" src={leader.imagem} />
            <img className="panel" src={leader.paineis} />
            
            {date.map((d, key) => {
              return (
                <div className="leaderData" key={key}>
                  <div className="leadersDate">
                    <span className="dateDay">{d.data}</span>
                    <span className="dateMonth">{d.data}</span>
                  </div>
                </div>
              )
            })}

            <div className="leadersInfo">
              <h4 className="leaderName">{leader.tratamento}</h4>
              <span className="leaderOffice">{leader.descricao.BR}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}


          