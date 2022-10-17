import ImgLygga from '../../assets/images/programming/painel-lygga.png'
import PanelRectangle from '../../assets/images/programming/panel-rectangle.png'
import ImgRectangle from '../../assets/images/programming/img-rectangle.png'
import { Avatar } from '../avatar/Avatar'

import './PanelLygga.css'

export function PanelLygaa() {
  return (
    <div className="panelLygaa">
      <section className="Dates">
        <div className="Date">3º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <div className="groupPanel">
          <img className="imgLygga" src={ImgLygga} />

          <div className="panelRectangle">
            {/* <div className="avatarGroup">
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
            </div> */}

            {/* <div className="speakerGroup">
             <img className="imgRectangle" src={ImgRectangle} alt="" />
             <span className="speakerName" src={ImgRectangle}>
                Alberto Campos Fernandes
             </span>
            </div> */}
          </div>
        </div>

        <div className="Moderator">Moderador</div>
      </section>
    </div>
  )
}
