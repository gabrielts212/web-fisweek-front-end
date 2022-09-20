import PanelFis from '../../assets/images/programming/painel-fis.png'
import PanelRectangle from '../../assets/images/programming/painel-rectangle.png'

import './Panels.css'

export function Panels() {
  return (
    <div className="Panels">
      <section className="dates">
        <div className="date">1º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <img className="panelFis" src={PanelFis} alt="Painel da Fis" />
        <img src={PanelRectangle} alt="Retangudo do Painel" />
      </section>
    </div>
  )
}