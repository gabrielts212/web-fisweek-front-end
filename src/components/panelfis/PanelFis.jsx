import ImgFis from '../../assets/images/programming/painel-fis.png'
import PanelRectangle from '../../assets/images/programming/panel-rectangle.png'
import ImgRectangle from '../../assets/images/programming/img-rectangle.png'
import { Avatar } from '../avatar/Avatar'

import './PanelFis.css'

export function PanelFis() {
  return (
    <div className="panelFis">
      <section className="Dates">
        <div className="Date">1º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p className="paragraph">Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <div className="groupPanel">
          <img className="imgFis" src={ImgFis} />

          <img className="panelRectangle" src={PanelRectangle} />
          <div className="panelData">
            <div className="avatarGroup">
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"/>
            </div>

            <div className="speakerGroup">
             <img className="imgRectangle" src={ImgRectangle} alt="" />
             <span className="speakerName" src={ImgRectangle}>
                Alberto Campos Fernandes
             </span>
            </div>
          </div>
        </div>
        
        <div className="Moderator">Moderador</div>
      </section>
    </div>
  )
}


