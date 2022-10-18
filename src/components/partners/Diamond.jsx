// import "./Partners.css";
// import Eclipse2 from "../../assets/images/patrocinadores/eclipse2.png";


import Carousel from "react-multi-carousel";

import americas from "../../assets/images/patrocinadores/diamond/americas.svg";
import amil from "../../assets/images/patrocinadores/diamond/amil.svg";
import astra_zeneca from "../../assets/images/patrocinadores/diamond/astra_zeneca.png";
import blessing from "../../assets/images/patrocinadores/diamond/Blessing.png";
import cortex_med from "../../assets/images/patrocinadores/diamond/cortex_med.svg";
import med_rio from "../../assets/images/patrocinadores/diamond/med_rio.svg";
import microsoft from "../../assets/images/patrocinadores/diamond/microsoft.png";
import pronep from "../../assets/images/patrocinadores/diamond/pronep.png";
import rede_hospital_casa from "../../assets/images/patrocinadores/diamond/rede_hospital_casa.svg";
import roche from "../../assets/images/patrocinadores/diamond/roche.svg";
import seegene from "../../assets/images/patrocinadores/diamond/seegene.svg";
import sodexo from "../../assets/images/patrocinadores/diamond/sodexo.png";
import senac from "../../assets/images/patrocinadores/diamond/senac.png";
import white_martins from "../../assets/images/patrocinadores/diamond/white_martins.png";
import oncoclinicas from "../../assets/images/patrocinadores/diamond/Oncoclinicas.png";


export function Partners(props) {
    const responsive = {
      superLargeDesktop: {
        
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };


  return (
    // <div className="Partners">

    //   <div>
    //   <div className="header">
    //   <h1>Partners</h1>
    //     <img src={Eclipse2} alt="Circulo" />
    //   </div>
    //   </div>

      <Diamond>
      <Title>{props.lang.TITLE_1}</Title>
      <div className="carousel">
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={<button className="teste left" aria-label="Move Banner Left"></button>}
          customRightArrow={
            <button className="teste right" aria-label="Move Banner Right"></button>
          }
          responsive={responsive}
        >
          <a href="https://www.americasmed.com.br/" target="_blank">
            <img src={americas} alt={"Logo do parceiro "} />
          </a>
          <a href="http://www.amil.com.br/institucional/#/" target="_blank">
            <img src={amil} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.astrazeneca.com.br/">
            <img src={astra_zeneca} alt={"Logo do parceiro "} />
          </a>

          <a href="https://laboratorioblessing.com.br/" target="_blank">
            <img src={blessing} alt={"Logo do parceiro "} />
          </a>
          <a href="https://cortex.med.br/">
            <img src={cortex_med} alt={"Logo do parceiro "} />
          </a>


          <a href="https://medriocheck-up.com.br/" target="_blank">
            <img src={med_rio} alt={"Logo do parceiro "} />
          </a>

          <a href="https://grupooncoclinicas.com/" target="_blank">
            <img src={oncoclinicas} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.pronep.com.br" target="_blank">
            <img src={pronep} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.redehospitalcasa.com.br/" target="_blank">
            <img src={rede_hospital_casa} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.roche.com.br/">
            <img src={roche} alt={"Logo do parceiro "} />
          </a>

          <a href="https://seegenebrazil.com.br/" target="_blank">
            <img src={seegene} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.senac.br/" target="_blank">
            <img src={senac} alt={"Logo do parceiro "} />
          </a>

          <a href="https://br.sodexo.com/" target="_blank">
            <img src={sodexo} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.praxair.com.br/" target="_blank">
            <img src={white_martins} alt={"Logo do parceiro "} />
          </a>
        </Carousel>
      </div>
    </Diamond>

    // </div>
  );
}
