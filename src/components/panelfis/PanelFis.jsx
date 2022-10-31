import ImgFis from "../../assets/images/programming/painel-fis.png";
import ImgSm from "../../assets/images/programming/painel-sm.png";
import ImgLygga from "../../assets/images/programming/painel-lygga.png";
import ImgMeets from "../../assets/images/programming/painel-meets.png";
import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
import ImgRectangle from '../../assets/images/programming/img-rectangle.png'
import { Avatar } from "../avatar/Avatar";
import moment from 'moment';
import AvatarPanel from '../../assets/images/leaders/avatarLeader.png';

import "./PanelFis.css";

import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



export function PanelFis({showAll, showPanels, panelSearch}) {
  const { t } = useTranslation();
  const [ panel, setPanel ] = useState([])
  const [ dates, setDates ] = useState([])

  const filteredDate = dates.filter(date => 
    date.painel.BR.toLowerCase().includes(panelSearch.toLowerCase())
    )

  useEffect (() => {
    axios
    .get("/server/fisweek/lideres")
    .then((response) => {
      const rightPanel = showAll ? response.data : response.data.slice(0,5)
      setPanel(rightPanel)
    })
  }, [])
  
   useEffect(() => {
    axios
      .get("/server/fisweek/painel/buscar")
      .then((response) => {
        const infoData = showPanels ? response.data : response.data.slice(0,4)
        setDates(infoData);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);
  
  return (
    <div>
      {filteredDate.map((date) => {
        return (

          <div className="panelFis">
        <section className="Dates">
          <div className="Date" showPanels={false}>{t("programmation.dayM")} {moment(date.data).format("DD/MM")}</div>
          {/* <div className="dateAndTime" showPanels={false}>{moment(date.horario.inicio).hour()}</div> */}
          <div className="Utc3">UTC-3</div>
        </section>

        <section className="Speakers">
          <p className="paragraph">
          {t("programmation.text")} {date.painel.BR}
          </p>
        {/* <div className="groupPanel">
          <img className="imgFis" src={ImgFis} />

          <img className="panelRectangle" src={PanelRectangle} />

          <div className="avatarGroup" >
            {panel.map((panel) => 
            <Avatar
            showAll={true}
            key={panel} 
            name={panel.tratamento}
            background={ImgRectangle}
            src={AvatarPanel}
            />
            )}
            <div className="Moderator">{t("programmation.moderator")}</div>
          </div>
        </div> */}
        </section>
      </div>
     )
   })}
     
    </div>
  );
}

