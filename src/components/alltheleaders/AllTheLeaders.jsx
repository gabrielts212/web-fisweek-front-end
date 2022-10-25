import "./AllTheLeaders.css";

import { useEffect, useState } from "react";

import EclipseYellow from '../../assets/images/leaders/eclipse-yellow.png';
import { LeaderData } from "../leaderdata/LeaderData";
import { MagnifyingGlass } from "phosphor-react";

export function AllTheLeaders() {
  const [initialAllLeaders, setInitialAllLeaders] = useState([]);
  const [allLeaders, setAllLeaders] = useState([]);
  const [initialDate, setInitialDate] = useState([]);
  const [date, setDate] = useState([]);
  
  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await fetch(
          "/server/fisweek/lideres"
        );
        const data = await response.json();
        setInitialAllLeaders(data);
        setAllLeaders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLeaders();
  }, []);

  useEffect(() => {
    const fetchDataLeaders = async () => {
      try {
        const response = await fetch(
          "/server/fisweek/painel/buscar"
        );
        const data = await response.json();
        setInitialDate(data);
        setDate(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataLeaders();
  }, []);


  const handleChange = ({ target }) => {
    if(!target.value) {
      setAllLeaders(initialAllLeaders)
      setDate(initialDate)
      return
    } 

    const filterLeaders = allLeaders.filter(({ name }) => name.toLowerCase().toUpperCase().includes(target.value))

    setAllLeaders(filterLeaders)


    const filterDataLeaders = date.filter(({ name }) => name.toLowerCase().toUpperCase().includes(target.value))

    setInitialDate(filterDataLeaders)
  }

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
          onChange={handleChange}
          placeholder="Pesquise por nome ou evento" />

        <MagnifyingGlass className="iconSearch" size={32}/>
      </div>

      <div className="leaderDataGroup">
          {allLeaders.map((leader) => (
            <div>
              <LeaderData key={leader.id}/>
              {leader.name} 
            </div>
          ))}

          {date.map((leader) => (
            <div>
              <LeaderData key={leader.id}/>
              {leader.name} 
            </div>
          ))}
      </div>
    </div>
  );
}
