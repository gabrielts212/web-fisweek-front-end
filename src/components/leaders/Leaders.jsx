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
import { AvatarLeaders } from "../avatarleaders/AvatarLeaders";

export function Leaders() {
  return (
    <div className="Leaders">
      <div className="container">
        <div className="leader-foto">
          <AvatarLeaders src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/640px-Bill_Gates_2018.jpg" />

          <AvatarLeaders src="https://avatars.githubusercontent.com/u/91156517?v=4" />
        </div>

        <div className="text-background">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        </div>

        <div className="text-background2">
          <img className="Rectangle2" src={Rectangle} alt="imagem-geometrica" />
        </div>

        <div className="date-background">
          <img className="Data" src={Data} alt="imagem-geometrica" />
        </div>

        <div className="date-background2">
          <img className="Data2" src={Data} alt="imagem-geometrica" />
        </div>

        <div className="name-and-title">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>
        <div className="name-and-title2">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>

        <div className="fundo-leader">
          <img className="image-fundo" src={ImageFundo} alt="imagem-geometrica" />
        </div>
        <img className="image-fundo6" src={ImageFundo6} alt="imagem-geometrica" />
        

      </div>
    </div>
  );
}
