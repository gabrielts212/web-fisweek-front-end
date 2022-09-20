import "./Leaders.css";
import Leader1 from "../../assets/images/leaders/leader1.png";
// import ImageFundo from "../../assets/images/leaders/ImageFundo.png";
// import ImageFundo2 from "../../assets/images/leaders/ImageFundo2.png";
// import ImageFundo3 from "../../assets/images/leaders/ImageFundo3.png";
// import ImageFundo4 from "../../assets/images/leaders/ImageFundo4.png";
// import ImageFundo5 from "../../assets/images/leaders/ImageFundo5.png";
// import ImageFundo6 from "../../assets/images/leaders/ImageFundo6.png";
// import ImageFundo7 from "../../assets/images/leaders/ImageFundo7.png";
import Data from "../../assets/images/leaders/Data.png";


export function Leaders() {
  return (
    <div className="Leaders">
      <div className="images-leaders">
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
        <img className="Leader1" src={Leader1} alt="imagem-lider" />
      </div>


      <div className="position-images">
        <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
      </div>

      <div className="position-images2">
        <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
        <img className="Rectangle" src={Rectangle} alt="imagem-geometrica" />
      </div>

      <div className="position-data">
        <img className="Data" src={Data} alt="imagem-geometrica" />
        <img className="Data" src={Data} alt="imagem-geometrica" />
        <img className="Data" src={Data} alt="imagem-geometrica" />
      </div>

      <div className="position-data2">
        <img className="Data" src={Data} alt="imagem-geometrica" />
        <img className="Data" src={Data} alt="imagem-geometrica" />
        <img className="Data" src={Data} alt="imagem-geometrica" />
      </div>

      {/* <div className="">
        <img className="imagefundo" src={ImageFundo} alt="" />
        <img className="imagefundo2" src={ImageFundo2} alt="" />
        <img className="imagefundo3" src={ImageFundo3} alt="" />
        <img className="imagefundo4" src={ImageFundo4} alt="" />
        <img className="imagefundo5" src={ImageFundo5} alt="" />
        <img className="imagefundo6" src={ImageFundo6} alt="" />
        <img className="imagefundo7" src={ImageFundo7} alt="" />
      </div> */}

<div className="text">
      <h3>Nome</h3>
      <span>Cargo / Empresa</span>
</div>
<div className="text2">
      <h3>Nome</h3>
      <span>Cargo / Empresa</span>
</div>
<div className="text3">
      <h3>Nome</h3>
      <span>Cargo / Empresa</span>
</div>
<div className="text4">
      <h3>Nome</h3>
      <span>Cargo / Empresa</span>
</div>
<div className="text5">
      <h3>Nome</h3>
      <span>Cargo / Empresa</span>
</div>
<div className="text6">
      <h3>Nome</h3>
      <span>Cargo / Empresa</span>
</div>


    </div>
  );
}
