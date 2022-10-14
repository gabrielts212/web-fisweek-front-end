import "./AllTheSchedule.css";

import Eclipse from '../../assets/images/programming/eclipse.png'
import { PanelFis } from '../panelfis/PanelFis'
import { PanelLygaa } from '../panellygga/PanelLygga'
import { PanelMeets } from '../panelmeets/PanelMeets'
import { PanelSm } from '../panelsm/PanelSm'
import { MagnifyingGlass } from "phosphor-react";

export function AllTheSchedule() {
  
  return (
    <div className="allTheSchedule">
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

      <div>
        <input type="text" placeholder="Pesquise por nome ou evento" />
        <MagnifyingGlass className="iconSearch" size={32}/>
      </div>
      
      <PanelFis />
      <PanelSm />
      <PanelLygaa />
      <PanelMeets />
    </div>
  );
}