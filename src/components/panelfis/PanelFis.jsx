import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
import ImgRectangle from "../../assets/images/programming/img-rectangle.png";
import { Avatar } from "../avatar/Avatar";
import moment from "moment";
// import AvatarLeader from '../../assets/images/leaders/avatarLeader.png';

import "./PanelFis.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export function PanelFis({ showPanels, panelSearch}) {
  const { t } = useTranslation();
  const [dates, setDates] = useState([]);
  
  useEffect(() => {
    axios
    .get("/server/fisweek/painel/buscar")
    .then((response) => {
      const infoData = showPanels ? response.data.slice(2,90) : response.data.slice(2, 6);
        setDates(infoData);
      })
      .catch((err) => {
        setErr(err);
      });
    }, []);

      const filteredDate = dates?.filter((date) => 
        date.painel?.BR.toLowerCase().includes(panelSearch.toLowerCase())
      );

    return (
      <div>
      {filteredDate.sort((a, b) => a.data >= b.data ? 1 : -1).map((date) => {
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
                <div className="groupPanel">      
                <img className="panelRectangle" src={PanelRectangle} />
              
              {date.lideres.map((tratamento) => {
                const leaderImage = tratamento?.tratamento?.toLowerCase().replace(' ' && /[^a-zA-Z0-9]/g, '-');
                return (

                  <div className="avatarGroup" >
                  <Avatar
                    showAll={true}
                    name={tratamento.tratamento}
                    background={ImgRectangle}
                    src={"https://fis.org.br/images/lideres/" + leaderImage + ".png"}
                    />
                </div>
                    )
                  }
                  )}
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
