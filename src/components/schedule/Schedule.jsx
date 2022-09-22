import Eclipse from '../../assets/images/programming/eclipse.png'
import { PanelFis } from '../panelfis/PanelFis'
import { PanelLygaa } from '../panellygga/PanelLygga'
import { PanelMeets } from '../panelmeets/PanelMeets'
import { PanelSm } from '../panelsm/PanelSm'

import './Schedule.css'

export function Schedule() {
  return (
    <div className="Schedule">
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

      <PanelFis />
      <PanelSm />
      <PanelLygaa />
      <PanelMeets />
    </div>
  )
}

