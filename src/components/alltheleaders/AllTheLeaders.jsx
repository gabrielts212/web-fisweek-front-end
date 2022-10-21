import "./AllTheLeaders.css";

import EclipseYellow from '../../assets/images/leaders/eclipse-yellow.png';
import { LeaderData } from "../leaderdata/LeaderData";
import { MagnifyingGlass } from "phosphor-react";

export function AllTheLeaders() {
  return (
    <div className="allTheLeaders">
      <header>
        <h1>Líderes</h1>
        <img src={EclipseYellow} alt="Circulo amarelo" />
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

      <div className="leaderDataGroup">
        <LeaderData />
      </div>
    </div>
  );
}


