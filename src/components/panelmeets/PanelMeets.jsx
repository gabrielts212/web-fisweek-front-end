import ImgMeets from '../../assets/images/programming/painel-meets.png'
import { Avatar } from '../avatar/Avatar'

import './PanelMeets.css'

export function PanelMeets() {
  return (
    <div className="panelMeets">
      <section className="Dates">
        <div className="Date">4º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <div className="groupPanel">
          <img className="imgMeets" src={ImgMeets} />

          <div className="panelRectangle">
            <div className="avatarGroup">
              <Avatar src="https://github.com/iniciativafis.png"/>
              <Avatar src="https://github.com/iniciativafis.png"/>
              <Avatar src="https://github.com/iniciativafis.png"/>
              <Avatar src="https://github.com/iniciativafis.png"/>
              <Avatar src="https://github.com/iniciativafis.png"/>
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

      <div className="registrationButton">
        <button className="buttonLink">Quero me cadastrar</button>
      </div>
    </div>
  )
}
