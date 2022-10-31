import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AvatarLeader from '../../assets/images/leaders/avatarLeader.png';
import Panel from '../../assets/images/leaders/panel.png';

import "./LeaderData.css";

export function LeaderData({ input, showAll }) {
  const [leaders, setLeaders] = useState([])
  const [dates, setDates] = useState([]);
  const [err, setErr] = useState([]);

  const filteredLeaders = leaders.filter(leader => 
    leader.tratamento.toLowerCase().includes(input.toLowerCase())
  )

  useEffect(() => {
    axios
      .get("/server/fisweek/lideres")
      .then((response) => {
        const infoLeaders = showAll ? response.data : response.data.slice(0,6)
        setLeaders(infoLeaders);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);
    

  // useEffect(() => {
  //   axios
  //     .get("/server/fisweek/painel/buscar")
  //     .then((response) => {
  //       const infoData = showAll ? response.data : response.data.slice(0,6)
  //       setDates(infoData);
  //     })
  //     .catch((err) => {
  //       setErr(err);
  //     });
  // }),
  //   [];

  return (
    <Row className="rowLeaders">
      {filteredLeaders.map((leader, key) => {
        return (
          <Col xs={12} sm={12} md={6} lg={4} key={key._id} className="colLeaders">
            <img className="avatarLeader" src={AvatarLeader} />
            <img className="panel" src={Panel}/> 

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
          </Col>
        );
      })}
    </Row>
  );
}
