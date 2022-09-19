import './Programming.css'

export function Programming() {
  return (
    <div className="Programming">
      <header>
        <h1>Programação</h1>
      </header>
      <section className="daysOfTheWeek">
        <div className="Days">Todos</div>
        <div className="Days">Dia 7</div>
        <div className="Days">Dia 8</div>
        <div className="Days">Dia 9</div>
        <div className="Days">Dia 10</div>
        <div className="Days">Dia 11</div>
      </section>

      <section className="dates">
        <div className="date"></div>
        <div className="dateAndTime"></div>
      </section>

      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <img src={PanelLogo} alt="Logo do painel" />
        
      </section>
    </div>
  )
}