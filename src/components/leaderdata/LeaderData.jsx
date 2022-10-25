import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

import "./LeaderData.css";

export function LeaderData() {
  const [leaders, setLeaders] = useState([]);
  const [date, setDate] = useState([]);
  const [err, setErr] = useState([]);

  useEffect(() => {
    axios
      .get("/server/fisweek/lideres")
      .then((response) => {
        setLeaders(response.data);
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
      {leaders.slice(0, 2).map((leader, key) => {
        return (
          <div className="leaderData" key={key._id}>
            <img
              className="avatarLeader"
              src={`https://fis.org.br/server/biblioteca/imagens/${leader.imagem}`}
            />
            <img className="panel" src={leader.paineis}/>

            {date.map((d) => {
              return (
                <div className="leadersDate">
                  <span className="dateDay">{moment(d.data).format("DD")}</span>
                  <span className="dateMonth ">{moment(d.data).format("MM")}</span>
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

