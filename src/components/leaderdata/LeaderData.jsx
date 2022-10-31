import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AvatarLeader from '../../assets/images/leaders/avatarLeader.png';
import Panel from '../../assets/images/leaders/panel.png';

import "./LeaderData.css";
import { Spinner } from "react-bootstrap";

export function LeaderData({ input, showAll }) {
  const [leaders, setLeaders] = useState([])
  // const [dates, setDates] = useState([]);
  const [err, setErr] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  const filteredLeaders = leaders.filter(leader => 
    leader.tratamento.toLowerCase().includes(input.toLowerCase())
  )

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("/server/fisweek/lideres")
      .then((response) => {
        const infoLeaders = showAll ? response.data : response.data.slice(0,6)
        setLeaders(infoLeaders);
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
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
      { isLoading ? <Spinner animation="border" role="status" variant="light" className="spinner"/> : filteredLeaders.map((leader, key) => {
        return (
          <Col xs={12} sm={12} md={6} lg={4} key={key._id} className="colLeaders">
            <img 
              className="avatarLeader" 
              src={AvatarLeader}
              // src="https://cpanel.fis.org.br/cpsess6995292450/frontend/paper_lantern/filemanager/index.html/images-lideres-sample.png"
              // onError={(e) => {e.target.onerror = null; e.target.src={AvatarLeader} }} 
            />
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
