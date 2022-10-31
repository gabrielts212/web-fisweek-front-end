import "./AllTheLeaders.css";

import { useState } from "react";
import { useTranslation } from 'react-i18next';

import EclipseYellow from '../../assets/images/leaders/eclipse-yellow.png';
import { LeaderData } from "../leaderdata/LeaderData";
import { MagnifyingGlass } from "phosphor-react";

export function AllTheLeaders() {
  const { t } = useTranslation();

  const [ input, setInput ] = useState("")

  const searchHandler = (event) => {
    setInput(event.target.value)
  }

  
  return (
    <div className="allTheLeaders">
      <header>
        <h1>Líderes</h1>
        <img src={EclipseYellow} alt="Circulo amarelo" />
      </header>

      {/* <section className="daysOfTheWeek">
        <div className="Every Days" onClick={() => {console.log("Todos")}}>Todos</div>
        <div className="Days" onClick={() => {console.log("Dia 7")}}>Dia 7</div>
        <div className="Days" onClick={() => {console.log("Dia 8")}}>Dia 8</div>
        <div className="Days" onClick={() => {console.log("Dia 9")}}>Dia 9</div>
        <div className="Days" onClick={() => {console.log("Dia 10")}}>Dia 10</div>
        <div className="Days" onClick={() => {console.log("Dia 11 ")}}>Dia 11</div>
      </section> */}

      <div>
        <input type="text" placeholder={t("leaders.filterLeaders")} onChange={searchHandler}/>
        <MagnifyingGlass className="iconSearch" size={32}/>
      </div>

      <div className="leaderDataGroup" >
        <LeaderData input={input} showAll={true}/>
      </div>
    </div>
  );
}
