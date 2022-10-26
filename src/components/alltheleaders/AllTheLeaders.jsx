import "./AllTheLeaders.css";

import { useEffect, useState } from "react";
import axios from "axios";

import EclipseYellow from "../../assets/images/leaders/eclipse-yellow.png";
import { LeaderData } from "../leaderdata/LeaderData";
import { MagnifyingGlass } from "phosphor-react";

export function AllTheLeaders({ showAll }) {
  const [initialAllLeaders, setInitialAllLeaders] = useState([]);
  const [allLeaders, setAllLeaders] = useState([]);
  // const [initialDates, setInitialDates] = useState([]);
  // const [dates, setDates] = useState([]);

  useEffect(() => {
    axios
      .get("/server/fisweek/lideres")
      .then((response) => {
        const infoLeaders = showAll ? response.data.slice(0,200) : response.data.slice(0,2)
        console.log(infoLeaders)
        setInitialAllLeaders(infoLeaders);
        setAllLeaders(infoLeaders);
      })
      .catch((err) => {
        setErr(err);
      });
  }),
    [];

    // useEffect(() => {
    //   axios
    //     .get("/server/fisweek/painel/buscar")
    //     .then((response) => {
    //       const infoData = showAll ? response.data : response.data.slice(0,2)
    //       setInitialDates(response.data);
    //       setDates(response.data);
    //     })
    //     .catch((err) => {
    //       setErr(err);
    //     });
    // }),
    //   [];

  const handleChange = ({ target }) => {
    if (!target.value) {
      console.log(initialAllLeaders)
      setAllLeaders(initialAllLeaders);
      // setDates(initialDates);
      return;
    }

    const filterLeaders = allLeaders.filter(({ name }) =>
      name.toLowerCase().includes(target.value)
    );
    console.log(filterLeaders); // Retirar o console.log()
    setAllLeaders(filterLeaders);


    // const filterDateLeaders = dates.filter(({ data }) =>
    //   data.toLowerCase().toUpperCase().includes(target.value)
    // );
    // console.log(filterDateLeaders); 
    // setDates(filterDateLeaders);
  };

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
          placeholder="Pesquise por nome ou evento"
        />

        <MagnifyingGlass className="iconSearch" size={32} />
      </div>

      <div className="leaderDataGroup">
        {allLeaders.map((leader) => (
          <div>
            <LeaderData 
              showAll={true} 
            />
            {leader.name}
          </div>
        ))}

        {/* {dates.map((date) => (
          <div>
            <LeaderData key={date.id} showAll={false} />
            {date.data}
          </div>
        ))} */}
      </div>
    </div>
  );
}
