import "./LeaderData.css";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export function LeaderData() {
  const [leader, setLeader] = useState([]);
  const [date, setDate] = useState([]);
  const [err, setErr] = useState([]);

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
    [];

  useEffect(() => {
    axios
      .get("/server/fisweek/painel/buscar")
      .then((response) => {
        setDate(response.data);
      })
      .catch((err) => {
        setErr(err);
      });
  }),
    [];

  return (
    <div>
      {leader.slice(0, 2).map((leader, key) => {
        return (
          <div className="leaderData" key={key}>
            <img
              className="avatarLeader"
              src={`https://fis.org.br/server/biblioteca/imagens/${leader.img}`}
            />
            <img className="panel" 
              src={`https://fis.org.br/server/biblioteca/imagens/${leader.paineis}`}
            />

            {date.map((d, key) => {
              return (
                <div className="leadersDate" key={key}>
                  <span className="dateDay">{d.data[9]}</span>
                  <span className="dateMonth">{d.data[6]}</span>
                </div>
              );
            })}

            <div className="leadersInfo">
              <h4 className="leaderName">{leader.nome}</h4>
              <span className="leaderOffice">{leader.descricao.BR}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
