import Eclipse from '../../assets/images/programming/eclipse.png'
import { PanelFis } from '../panelfis/PanelFis'
import { PanelLygaa } from '../panellygga/PanelLygga'
import { PanelMeets } from '../panelmeets/PanelMeets'
import { PanelSm } from '../panelsm/PanelSm'

import { RegistrationInfo } from '../registrationInfo/RegistrationInfo'
import { Link } from "react-scroll";

import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

import './Schedule.css'

export function Schedule() {
  const [schedule, setSchedule] = useState([])

  const returnsSchedule = (value) => {
    
  }

  const scheduleFiltered = schedule.filter(returnsSchedule);
  const getData = async () => {
    let result = await axios.post("searchNew");
    setSchedule(result.data);
  };
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="Schedule" id='schedule'>
      <header>
        <h1>Programação</h1>
        <img src={Eclipse} alt="Circulo vermelho" />
      </header>
      
      <section className="daysOfTheWeek">
        <div className="Every Days">Todos</div>
        <div className="Days">Dia 7</div>
        <div className="Days">Dia 8</div>
        <div className="Days">Dia 9</div>
        <div className="Days">Dia 10</div>
        <div className="Days">Dia 11</div>
      </section>

      <div className="ScheduleGroup">
        {scheduleFiltered.map((panel) => {
            return (
              <>
                <PanelFis 
                  datas={panel.Dates}
                  paragrago={panel.paragraph}
                  img={panel.imgFis}
                  avatarGrupo={panel.avatarGroup}
                  nomes={panel.speakerGroup}
                  moderador={panel.Moderator}
                />
                <PanelSm 
                  datas={panel.Dates}
                  paragrago={panel.paragraph}
                  img={panel.imgFis}
                  avatarGrupo={panel.avatarGroup}
                  nomes={panel.speakerGroup}
                  moderador={panel.Moderator}
                />
                <PanelLygaa 
                  datas={panel.Dates}
                  paragrago={panel.paragraph}
                  img={panel.imgFis}
                  avatarGrupo={panel.avatarGroup}
                  nomes={panel.speakerGroup}
                  moderador={panel.Moderator}
                />
                <PanelMeets 
                  datas={panel.Dates}
                  paragrago={panel.paragraph}
                  img={panel.imgFis}
                  avatarGrupo={panel.avatarGroup}
                  nomes={panel.speakerGroup}
                  moderador={panel.Moderator}
                />
              </>
            );
          })}
      </div>
      
      <a href="/fisweek22/#/allTheSchedule" target="_blank">
        <button className="showShedule">Ver programação completa</button>
      </a>

      <div className="registrationButton">
        <a href="#">
          <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
            <button className="buttonLink">Quero me cadastrar</button>
          </Link> 
        </a>
      </div>
    </div>
  )
}


