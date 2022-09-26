import "./Leaders.css";
import Leader1 from "../../assets/images/leaders/leader1.png";
import Rectangle from "../../assets/images/leaders/Rectangle.png";
import ImageFundo from "../../assets/images/leaders/image-fundo.png";
import ImageFundo2 from "../../assets/images/leaders/image-fundo2.png";
import ImageFundo3 from "../../assets/images/leaders/image-fundo3.png";
import ImageFundo4 from "../../assets/images/leaders/image-fundo4.png";
import ImageFundo5 from "../../assets/images/leaders/image-fundo5.png";
import ImageFundo6 from "../../assets/images/leaders/image-fundo6.png";
import Data from "../../assets/images/leaders/Data.png";
import { AvatarLeaders } from "../avatarleaders/AvatarLeaders";

export function Leaders() {
  return (
    <div className="Leaders">
      <div>
        <div>
          <div className="leader-foto">
            <AvatarLeaders src="https://randomuser.me/api/portraits/women/44.jpg" />
            <AvatarLeaders src="https://randomuser.me/api/portraits/men/9.jpg" />
            <AvatarLeaders src="https://randomuser.me/api/portraits/men/61.jpg" />
            <AvatarLeaders src="https://randomuser.me/api/portraits/men/53.jpg" />
            <AvatarLeaders src="https://randomuser.me/api/portraits/women/42.jpg" />
            <AvatarLeaders src="https://randomuser.me/api/portraits/men/47.jpg" />
          </div>
        </div>

<div className="azul">

        <div className="text-background">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        </div>
        <div className="text-background2">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        </div>
        <div className="text-background3">
          <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        </div>

        <div className="text-background4">
          <img className="Rectangle2" src={Rectangle} alt="imagem-geometrica" />
        </div>

        <div className="text-background5">
          <img className="Rectangle2" src={Rectangle} alt="imagem-geometrica" />
        </div>

        <div className="text-background6">
          <img className="Rectangle2" src={Rectangle} alt="imagem-geometrica" />
        </div>

</div>



        <div className="date-background">
          <img className="Data" src={Data} alt="imagem-geometrica" />
        </div>

        <div className="date-background2">
          <img className="Data2" src={Data} alt="imagem-geometrica" />
        </div>
        <div className="date-background3">
          <img className="Data2" src={Data} alt="imagem-geometrica" />
        </div>
        <div className="date-background4">
          <img className="Data2" src={Data} alt="imagem-geometrica" />
        </div>
        <div className="date-background5">
          <img className="Data2" src={Data} alt="imagem-geometrica" />
        </div>
        <div className="date-background6">
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
        <div className="name-and-title3">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>
        <div className="name-and-title4">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>
        <div className="name-and-title5">
          <h3>Nome</h3>
          <span>Cargo / Empresa</span>
        </div>
        <div className="name-and-title6">
          <h3>Nome</h3>
          <span>Cargo / Empresa </span>
        </div>

        <div className="event-date">
          <h1>07</h1>
          {/* <h1 className="leaderDate"></h1> */}
          <h1>08</h1>
        </div>
        <div className="event-date2">
          <h1>07</h1>
          {/* <h1 className="leaderDate"></h1> */}
          <h1>08</h1>
        </div>
        <div className="event-date3">
          <h1>07</h1>
          {/* <h1 className="leaderDate"></h1> */}
          <h1>08</h1>
        </div>
        <div className="event-date4">
          <h1>07</h1>
          {/* <h1 className="leaderDate"></h1> */}
          <h1>08</h1>
        </div>
        <div className="event-date5">
          <h1>07</h1>
          {/* <h1 className="leaderDate"></h1> */}
          <h1>08</h1>
        </div>
        <div className="event-date6">
          <h1>07</h1>
          {/* <h1 className="leaderDate"></h1> */}
          <h1>08</h1>
        </div>

        <div className="fundo-leader"></div>
        <img className="image-fundo" src={ImageFundo} alt="imagem-geometrica" />
        <img
          className="image-fundo2"
          src={ImageFundo2}
          alt="imagem-geometrica"
        />
        <img
          className="image-fundo3"
          src={ImageFundo3}
          alt="imagem-geometrica"
        />
        <img
          className="image-fundo4"
          src={ImageFundo4}
          alt="imagem-geometrica"
        />
        <img
          className="image-fundo5"
          src={ImageFundo5}
          alt="imagem-geometrica"
        />
        <img
          className="image-fundo6"
          src={ImageFundo6}
          alt="imagem-geometrica"
        />
      </div>
    </div>
  );
}
