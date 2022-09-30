import Women from "../../assets/images/women.png";
import GeometricShapes7 from "../../assets/images/geometric-shapes7.png";
import GeometricShapes8 from "../../assets/images/geometric-shapes8.png";
import GeometricShapes9 from "../../assets/images/geometric-shapes9.png";
import GeometricShapes10 from "../../assets/images/geometric-shapes10.png";
import GeometricShapes11 from "../../assets/images/geometric-shapes11.png";
import GeometricShapes12 from "../../assets/images/geometric-shapes12.png";
import GeometricShapes13 from "../../assets/images/geometric-shapes13.png";
import GeometricShapes14 from "../../assets/images/geometric-shapes14.png";
import FilterBlur from "../../assets/images/filter-blur.png";
import Hands from "../../assets/images/hands.png";
import EventDate from "../../assets/images/eventDate.png";
import LogoFis from "../../assets/images/logo-fis.png";

import { useTranslation } from 'react-i18next';

import './RegistrationInfo.css';

export function RegistrationInfo() {
  const { t } = useTranslation();

  return (
    <div className="registrationInfo">

      <img className="women" src={Women} alt="Mulher Sorrindo" />
      <img className="geometricShapes7" src={GeometricShapes7} alt="Forma Geométrica" />
      <img className="geometricShapes8" src={GeometricShapes8} alt="Forma Geométrica" />
      <img className="geometricShapes9" src={GeometricShapes9} alt="Forma Geométrica" />
      <img className="geometricShapes10" src={GeometricShapes10} alt="Forma Geométrica" />
      <img className="geometricShapes11" src={GeometricShapes11} alt="Forma Geométrica" />
      <img className="geometricShapes12" src={GeometricShapes12} alt="Forma Geométrica" />
      <img className="geometricShapes13" src={GeometricShapes13} alt="Forma Geométrica" />
      <img className="geometricShapes14" src={GeometricShapes14} alt="Forma Geométrica" />
      <img className="filterBlur" src={FilterBlur} />
      <img className="hands" src={Hands} alt="Aperto de mão humana com uma robótica" />
      <img className="eventDate" src={EventDate} alt="Data do evento" />
      <img className="logoFis" src={LogoFis} alt="Logo Fis" />

      <h1 className="title">
        {t("subscription")}
      </h1>

      <div className="text d-none d-lg-block">
        <p>
          {t("text")}
        </p>
      </div>
    </div>
  );
}
