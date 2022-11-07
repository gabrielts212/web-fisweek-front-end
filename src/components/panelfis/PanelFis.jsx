import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
import ImgRectangle from "../../assets/images/programming/img-rectangle.png";
import { Avatar } from "../avatar/Avatar";
import moment from "moment";
import AvatarLeader from '../../assets/images/leaders/avatarLeader.png';

import "./PanelFis.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export function PanelFis({ showAll, showPanels, panelSearch}) {
  const { t } = useTranslation();
  const [panel, setPanel] = useState([]);
  const [dates, setDates] = useState([]);
  
  useEffect(() => {
    axios
    .get("/server/fisweek/lideres")
    .then((response) => {
      const leadersPanel = response.data
      setPanel(leadersPanel);
    })
    .catch((err) => {
      setErr(err);
    });;
  }, []);

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

   
      const finalLeader = dates?.map(({lideres}) => {
        return lideres.map(({id}) => {
          const rightPanelLeader = panel?.find(leader => leader._id === id)
          return { id, tratamento: rightPanelLeader?.nome}    
        }
        );
      }
      ).reduce((acc, current) => {
        return [...acc, ...current];
      }, []).filter(({id}) => id !== "")
      
      

      
      

      

      const filteredDate = dates?.filter((date) => 
        date.painel?.BR.toLowerCase().includes(panelSearch.toLowerCase())
        );

    return (
      <div>
      {filteredDate?.sort((a, b) => a.data >= b.data ? 1 : -1).map((date) => {
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
              
              {date?.lideres.map(({id}) => {
                const checkIdLeader = finalLeader?.find((leaderId) => leaderId.id === id)
                // console.log(checkIdLeader)
                
                const leaderImage = checkIdLeader?.tratamento?.normalize("NFD").toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");
                return (
                  
                  <div className="avatarGroup" >
                  <Avatar
                    showAll={true}
                    name={checkIdLeader?.tratamento}
                    background={ImgRectangle}
                    src={"https://fis.org.br/images/finalpaineis/" + leaderImage + ".png"}
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
