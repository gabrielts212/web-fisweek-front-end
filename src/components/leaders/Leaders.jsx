import "./Leaders.css";
import Leader1 from "../../assets/images/leaders/leader1.png";
import Rectangle from "../../assets/images/leaders/Rectangle.png";
import Rectangle2 from "../../assets/images/leaders/Rectangle2.png";

export function Leaders() {
  return (
    <div className="Leaders">

      <div className="images-leaders">
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
      </div>

      <div className="images-leaders2">
      </div>

      <div className="images-leaders3">
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
      </div>

      <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
      <h1>Nome</h1>
      <h3>Cargo / Empresa</h3>
      <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
      <h1>Nome</h1>
      <h3>Cargo / Empresa</h3>
      <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
      <h1>Nome</h1>
      <h3>Cargo / Empresa</h3>
      <img className="Rectangle2" src={Rectangle2} alt="imagem-geometrica" />
      <img className="Rectangle2" src={Rectangle2} alt="imagem-geometrica" />
      <img className="Rectangle2" src={Rectangle2} alt="imagem-geometrica" />

      <h2>AQUI</h2>
    </div>
  );
}
