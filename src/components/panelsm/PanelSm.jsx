import ImgSm from "../../assets/images/programming/painel-sm.png";
import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
import ImgRectangle from "../../assets/images/programming/img-rectangle.png";
import { Avatar } from "../avatar/Avatar";

import "./PanelSm.css";

export function PanelSm() {
  return (
    <div className="panelSm">
      <section className="Dates">
        <div className="Date">2º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>
          Os desafios de implementar políticas públicas de saúde durante uma
          pandemia
        </p>
        <div className="groupPanel">
          <img className="imgSm" src={ImgSm} />

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
              src="https://randomuser.me/api/portraits/men/21.jpg"
            />
            <div className="Moderator">Moderador</div>
          </div>
        </div>
      </section>
    </div>
  );
}
