import "./Leaders.css";
import Leader1 from "../../assets/images/leaders/Leader1.png";
import Rectangle from "../../assets/images/leaders/Rectangle.png";
import ImageFundo from "../../assets/images/leaders/Image-Fundo.png";
import ImageFundo2 from "../../assets/images/leaders/Image-Fundo2.png";
import ImageFundo3 from "../../assets/images/leaders/Image-Fundo3.png";
import ImageFundo4 from "../../assets/images/leaders/Image-Fundo4.png";
import ImageFundo5 from "../../assets/images/leaders/Image-Fundo5.png";
import ImageFundo6 from "../../assets/images/leaders/Image-Fundo6.png";
import Data from "../../assets/images/leaders/Data.png";

export function Leaders() {
  return (
    <div className="Leaders">
      <div className="container">

        <div className="text1">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>

        <div className="fundo-data">
          <img className="Data" src={Data} alt="imagem-geometrica" />
        </div>

        <div className="leader-foto">
          <img className="Leader1" src={Leader1} alt="imagem-lider" />
        </div>

        <div className="fundo-text">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        </div>

        {/* <div className="fundo-leader">
          <img className="imagefundo" src={ImageFundo} alt="" />
          <img className="imagefundo6" src={ImageFundo6} alt="" />
          <img className="imagefundo5" src={ImageFundo5} alt="" />
        </div> */}
      </div>

      <div className="container">
        
        <div className="text1">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>

        <div className="fundo-data">
          <img className="Data" src={Data} alt="imagem-geometrica" />
        </div>

        <div>
          <img className="Leader1" src={Leader1} alt="imagem-lider" />
        </div>

        <div className="fundo-text">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        </div>
        {/* <div className="fundo-text">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
          <img className="imagefundo2" src={ImageFundo2} alt="" />
          <img className="imagefundo4" src={ImageFundo4} alt="" />
        </div> */}

      </div>
    </div>
  );
}
