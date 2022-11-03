// import ImgFis from "../../assets/images/programming/painel-fis.png";
// import ImgSm from "../../assets/images/programming/painel-sm.png";
// import ImgLygga from "../../assets/images/programming/painel-lygga.png";
// import ImgMeets from "../../assets/images/programming/painel-meets.png";
// import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
// import ImgRectangle from "../../assets/images/programming/img-rectangle.png";
// import { Avatar } from "../avatar/Avatar";
import moment from "moment";
// import AvatarPanel from "../../assets/images/leaders/avatarLeader.png";
// import styles from '../avatar/Avatar.module.css'
// import AvatarLeader from '../../assets/images/leaders/avatarLeader.png';

import "./PanelFis.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { Col, Row } from "react-bootstrap";

export function PanelFis({ showAll, showPanels, panelSearch}) {
  const { t } = useTranslation();
  // const [panel, setPanel] = useState([]);
  const [dates, setDates] = useState([]);
  
  // useEffect(() => {
  //   axios
  //   .get("/server/fisweek/lideres")
  //   .then((response) => {
  //     const leadersPanel = response.data
  //     setPanel(leadersPanel);
  //   })
  //   .catch((err) => {
  //     setErr(err);
  //   });;
  // }, []);
  
  useEffect(() => {
    axios
    .get("/server/fisweek/painel/buscar")
    .then((response) => {
      const infoData = showPanels ? response.data : response.data.slice(0, 4);
        setDates(infoData);
      })
      .catch((err) => {
        setErr(err);
      });
    }, []);
    
    // const mapedPanelsLeader = showAll ? dates?.map(({lideres}) => {
    //   return lideres.map(({id}) => {
    //     const rightPanelLeader = panel?.find(leader => leader._id === id)
        
    //     return {tratamento: rightPanelLeader?.tratamento}
    //   })
    // }
    // ) :
    // dates?.map(({lideres}) => {
    //   return lideres.map(({id}) => {
    //     const rightPanelLeader = panel?.find(leader => leader._id === id)
        
    //     return {tratamento: rightPanelLeader?.tratamento}
    //   })
    // }
    // ).slice(0,4)
  
    
    // console.log(mapedPanelsLeader)

    
      const filteredDate = dates?.filter((date) =>
        date.painel?.BR.toLowerCase().includes(panelSearch.toLowerCase())
      );
        
    
    return (
      <div>
      {filteredDate.sort((a, b) => a.data > b.data ? 1 : -1).map((date) => {
        return (
          <div className="panelFis">
            <section className="Dates">
              <div className="Date" showPanels={false}>
                {t("programmation.dayM")} {moment(date.data).format("DD/MM")}
              </div>
              <div className="dateAndTime" showPanels={false}>
                {date.horario.inicio}-
                {date.horario.encerramento}
              </div>
              <div className="Utc3">UTC-3</div>
            </section>

            <section className="Speakers">
              <p className="paragraph">
                {date.painel.BR}
              </p>
              {/* <div className="groupPanel">
          <img className="imgFis" src={ImgFis} />

          <img className="panelRectangle" src={PanelRectangle} />


            <img className={styles.imgRectangle} src={background}/>
            {mapedPanelsLeader?.map((leader) =>{ 
              return (
                <Row className="avatarGroup" showAll={true} >
                <Col>
            <img className={styles.avatar} src={AvatarLeader} />

                <span className="speakerName">{leader[0].tratamento}</span>
                </Col>
          </Row>
                )
              })}
              </div>
                <div className="Moderator">{t("programmation.moderator")}</div> */}
            </section>
          </div>
        );
      })}
    </div>
  );
}
