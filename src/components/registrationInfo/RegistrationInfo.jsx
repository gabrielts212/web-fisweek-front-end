import Women from "../../assets/images/women.png";
import GeometricShapes7 from "../../assets/images/geometric-shapes7.png";
import GeometricShapes8 from "../../assets/images/geometric-shapes8.png";
import GeometricShapes9 from "../../assets/images/geometric-shapes9.png";
import GeometricShapes10 from "../../assets/images/geometric-shapes10.png";
import GeometricShapes11 from "../../assets/images/geometric-shapes11.png";
import GeometricShapes14 from "../../assets/images/geometric-shapes14.png";
import Text3 from "../../assets/images/text3.png";
import Logo2 from "../../assets/images/logo2.png";
import Hands from "../../assets/images/hands.png";

import './RegistrationInfo.css';

export function RegistrationInfo() {
  return (
    <div>
      <img className="women" src={Women} alt="" />
      <img className="geometric-shapes7" src={GeometricShapes7} alt="" />
      <img className="geometric-shapes8" src={GeometricShapes8} alt="" />
      <img className="geometric-shapes9" src={GeometricShapes9} alt="" />
      <img className="geometric-shapes10" src={GeometricShapes10} alt="" />
      <img className="geometric-shapes11" src={GeometricShapes11} alt="" />
      <img className="geometric-shapes14" src={GeometricShapes14} alt="" />
      <img className="hands" src={Hands} alt="" />
      <img className="text3" src={Text3} alt="" />
      <img className="logo2" src={Logo2} alt="" />

      <h1 className="text">
        A maior experiência da área da saúde da América Latina
      </h1>

      <div className="text2">
        <p>
          Vivencie uma super semana e impacte o Ecossistema da Saúde com a
          gente!A #FISWEEK é a maior Experiência da Saúde na América
          Latina.Aqui, nós reunimos lideranças, empresas e entidades com o
          objetivo de discutir todos os temas que impactam o setor em um evento
          totalmente digital e gratuito.
        </p>
      </div>
    </div>
  );
}
