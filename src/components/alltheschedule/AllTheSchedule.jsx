import "./AllTheSchedule.css";

import { useTranslation } from 'react-i18next';

import Eclipse from '../../assets/images/programming/eclipse.png'
import { PanelFis } from '../panelfis/PanelFis'
// import { PanelLygaa } from '../panellygga/PanelLygga'
// import { PanelMeets } from '../panelmeets/PanelMeets'
// import { PanelSm } from '../panelsm/PanelSm'
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react ";

export function AllTheSchedule() {
  const { t } = useTranslation();
  
  const [ panelSearch, setPanelSearch ] = useState("")
  

  const searchPanelHandler = (event) => {
    setPanelSearch(event.target.value)
  
  }

  return (
    <div className="allTheSchedule">
      <header>
        <h1>{t("programmation.programmation")}</h1>
        <img src={Eclipse} alt="Circulo vermelho" />
      </header>
      
      <section className="daysOfTheWeek">
        <div className="Every Days">{t("programmation.all")}</div>
        {/* <div className="Days">{t("programmation.day")} 7</div>
        <div className="Days">{t("programmation.day")} 8</div>
        <div className="Days">{t("programmation.day")} 9</div>
        <div className="Days">{t("programmation.day")} 10</div>
        <div className="Days">{t("programmation.day")} 11</div> */}
      </section>

      <div>
        <input type="text" placeholder="Pesquise por tema" onChange={searchPanelHandler}/>
        <MagnifyingGlass className="iconSearch" size={32}/>
      </div>
      
      <PanelFis  showAll={false} showPanels={true} panelSearch={panelSearch} />
      {/* <PanelSm />
      <PanelLygaa />
      <PanelMeets /> */}
    </div>
  );
}