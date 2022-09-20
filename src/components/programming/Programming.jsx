import Eclipse from '../../assets/images/programming/eclipse.png'
import { Panels } from '../panels/Panels'

import './Programming.css'

export function Programming() {
  return (
    <div className="Programming">
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

     <Panels />
    </div>
  )
}
