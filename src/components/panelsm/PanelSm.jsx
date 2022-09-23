import ImgSm from '../../assets/images/programming/painel-sm.png'
import { Avatar } from '../avatar/Avatar'

import './PanelSm.css'

export function PanelSm() {
  return (
    <div className="panelSm">
      <section className="Dates">
        <div className="Date">2º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <div className="groupPanel">
          <img className="imgSm" src={ImgSm} />

          <div className="panelRectangle">
            <div className="avatarGroup">
              <Avatar src="https://randomuser.me/api/portraits/men/11.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/women/51.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/13.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/91.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/51.jpg"/>
            </div>

            <div className="speakerGroup">
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Npme Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
            </div>

            <div className="Moderator">Moderador</div>
          </div>
        </div>
      </section>
    </div>
  )
}

