import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

import "./LeaderData.css";

export function LeaderData({ input, showAll }) {
  const [leaders, setLeaders] = useState([])
  const [dates, setDates] = useState([]);
  const [err, setErr] = useState([]);
  const [search, setSearch] = useState([]);

  const filteredLeaders = leaders.filter(leader => 
    leader.tratamento.toLowerCase().includes(input.toLowerCase())
  )

  useEffect(() => {
    axios
      .get("/server/fisweek/lideres")
      .then((response) => {
        const infoLeaders = showAll ? response.data.slice(0,200) : response.data.slice(0,6)
        setLeaders(infoLeaders);
      })
      .catch((err) => {
        setErr(err);
      });
  }),
    [];

  // useEffect(() => {
  //   axios
  //     .get("/server/fisweek/painel/buscar")
  //     .then((response) => {
  //       const infoData = showAll ? response.data.slice(0,200) : response.data.slice(0,6)
  //       setDates(infoData);
  //     })
  //     .catch((err) => {
  //       setErr(err);
  //     });
  // }),
  //   [];

  return (
    <div>
      {filteredLeaders.map((leader, key) => {
        return (
          <div className="leaderData" key={key._id}>
            <img className="avatarLeader" src={leader.imagem} />
            <img className="panel" src={leader.evento}/> 

            {/* {dates.map((date, key) => {
              return (
                <div className="leadersDate" key={key._id}>
                  <span className="dateDay">{moment(date.data).format("DD")}</span>
                  <span className="dateMonth ">{moment(date.data).format("MM")}</span>
                </div>
              );
            })} */}

            <div className="leadersInfo">
              <h4 className="leaderName">{leader.tratamento}</h4>
              <span className="leaderOffice">{leader.descricao.BR}</span>
              <span className="leaderCompany">{leader.empresa}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}


