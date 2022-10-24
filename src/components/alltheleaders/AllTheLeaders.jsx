import "./AllTheLeaders.css";

import EclipseYellow from '../../assets/images/leaders/eclipse-yellow.png';
import { LeaderData } from "../leaderdata/LeaderData";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

const days = [
  'Todos',
  'Dia 7',
  'Dia 8',
  'Dia 9',
  'Dia 10',
  'Dia 11',
];

export function AllTheLeaders() {
  const [search, setSearch] = useState('')
  console.log(search)

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
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Pesquise por nome ou evento" />

        <MagnifyingGlass className="iconSearch" size={32}/>

        <ul>
          {days.map((dt) => {
            <li key={dt}>{dt}</li>
          })}
        </ul>
      </div>

      <div className="leaderDataGroup">
        <LeaderData />
      </div>
    </div>
  );
}


