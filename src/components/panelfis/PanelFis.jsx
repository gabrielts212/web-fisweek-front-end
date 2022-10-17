import ImgFis from "../../assets/images/programming/painel-fis.png";
import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
import ImgRectangle from '../../assets/images/programming/img-rectangle.png'
import { Avatar } from "../avatar/Avatar";

import "./PanelFis.css";

export function PanelFis() {
  return (
    <div className="panelFis">
      <section className="Dates">
        <div className="Date">1º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p className="paragraph">
          Os desafios de implementar políticas públicas de saúde durante uma
          pandemia
        </p>
        <div className="groupPanel">
          <img className="imgFis" src={ImgFis} />

          <img className="panelRectangle" src={PanelRectangle} />

          <div className="avatarGroup">
            <Avatar
              name="Nome Sobrenome"
              background={ImgRectangle}
              src="https://randomuser.me/api/portraits/men/21.jpg"
            />
            <Avatar
              name="Nome Sobrenome"
              background={ImgRectangle}
              src="https://randomuser.me/api/portraits/men/21.jpg"
            />
            <Avatar
              name="Nome Sobrenome"
              background={ImgRectangle}
              src="https://randomuser.me/api/portraits/men/21.jpg"
            />
            <Avatar
              name="Nome Sobrenome"
              background={ImgRectangle}
              src="https://randomuser.me/api/portraits/men/21.jpg"
            />
            <Avatar
              name="Nome Sobrenome"
              background={ImgRectangle}
              moderador="Moderador"
              src="https://randomuser.me/api/portraits/men/21.jpg"
            />
            <div className="Moderator">Moderador</div>
          </div>
        </div>
      </section>
    </div>
  );
}
