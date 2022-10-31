import ImgMeets from "../../assets/images/programming/painel-meets.png";
import PanelRectangle from "../../assets/images/programming/panel-rectangle.png";
import ImgRectangle from "../../assets/images/programming/img-rectangle.png";
import { Avatar } from "../avatar/Avatar";

import { useTranslation } from 'react-i18next';

import "./PanelMeets.css";

export function PanelMeets() {
  const { t } = useTranslation();

  return (
    <div className="panelMeets">
      <section className="Dates">
        <div className="Date">4º {t("programmation.dayM")}-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>{t("programmation.text")}</p>
        <div className="groupPanel">
          <img className="imgMeets" src={ImgMeets} />

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
            <div className="Moderator">{t("programmation.moderator")}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
