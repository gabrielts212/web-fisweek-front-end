import PanelFis from '../../assets/images/programming/painel-fis.png'
import PanelSm from '../../assets/images/programming/painel-sm.png'
import PanelLygga from '../../assets/images/programming/painel-lygga.png'
import PanelMeets from '../../assets/images/programming/painel-meets.png'
import Avatar from '../../assets/images/programming/avatar.png'

import './SponsorsPanel.css'

export function SponsorsPanel(props) {
  return (
    <div className="sponsorsPanel">
      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <div className="groupPanel">
          <img className={props.panelFis} src={PanelFis} alt="Painel da Fis" />
          <img className={props.panelSm} src={PanelSm} alt="Painel da Fis" />
          <img className={props.panelLygga} src={PanelLygga} alt="Painel da Fis" />
          <img className={props.panelMeets} src={PanelMeets} alt="Painel da Fis" />
          <div className="panelRectangle">
            <div className="avatarGroup">
              <img className="Avatar" src={Avatar} />
              <img className="Avatar" src={Avatar} />
              <img className="Avatar" src={Avatar} />
              <img className="Avatar" src={Avatar} />
              <img className="Avatar" src={Avatar} />
            </div>

            <div className="speakerGroup">
              <div className="speakerName">Adalberto Campos Fernandes</div>
              <div className="speakerName">Adalberto Campos Fernandes</div>
              <div className="speakerName">Adalberto Campos Fernandes</div>
              <div className="speakerName">Adalberto Campos Fernandes</div>
              <div className="speakerName">Adalberto Campos Fernandes</div>
            </div>

            <div className="Moderator">Moderador</div>
          </div>
        </div>
      </section>
    </div>
  )
}