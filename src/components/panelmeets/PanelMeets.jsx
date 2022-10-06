import ImgMeets from '../../assets/images/programming/painel-meets.png'
import { Avatar } from '../avatar/Avatar'

import { RegistrationInfo } from '../registrationInfo/RegistrationInfo'
import { Link } from "react-scroll";

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
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
            </div>

            <div className="speakerGroup">
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
            </div>
          </div>
        </div>

        <div className="Moderator">Moderador</div>
      </section>

      <div className="registrationButton">
        <a href="#">
          <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
            <button className="buttonLink">Quero me cadastrar</button>
          </Link> 
        </a>
      </div>
    </div>
  )
}
