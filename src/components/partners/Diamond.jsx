// import "./style.jsx";
// import Eclipse2 from "../../assets/images/patrocinadores/eclipse2.png";
import React from "react";

import Carousel from "react-multi-carousel";

import Americas from "../../assets/images/patrocinadores/diamond/americas.svg";
import Amil from "../../assets/images/patrocinadores/diamond/amil.svg";
// import AstraZeneca from "../../assets/images/patrocinadores/diamond/astra_zeneca.png";
// import Blessing from "../../assets/images/patrocinadores/diamond/blessing.png";
// import CortexMed from "../../assets/images/patrocinadores/diamond/cortex-med.svg";
// import Med_rio from "../../assets/images/patrocinadores/diamond/med_rio.svg";
// import Microsoft from "../../assets/images/patrocinadores/diamond/microsoft.png";
// import Pronep from "../../assets/images/patrocinadores/diamond/pronep.png";
// import Rede_hospital_casa from "../../assets/images/patrocinadores/diamond/rede_hospital_casa.svg";
// import Roche from "../../assets/images/patrocinadores/diamond/roche.svg";
// import Seegene from "../../assets/images/patrocinadores/diamond/seegene.svg";
// import Sodexo from "../../assets/images/patrocinadores/diamond/sodexo.png";
// import Senac from "../../assets/images/patrocinadores/diamond/senac.png";
// import White_martins from "../../assets/images/patrocinadores/diamond/white_martins.png";
// import Oncoclinicas from "../../assets/images/patrocinadores/diamond/Oncoclinicas.png";


export function Partners() {
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

    // <div className="Partners">

    //   <div>
    //   <div className="header">
    //     <img src={Eclipse2} alt="Circulo" />
    //   <h1>Partners</h1>
    //   </div>
    //   </div>
    
  return (
      // <Partners>
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
            <img src={Americas} alt={"Logo do parceiro "} />
          </a>
          <a href="http://www.amil.com.br/institucional/#/" target="_blank">
            <img src={Amil} alt={"Logo do parceiro "} />
          </a>
          {/* <a href="https://www.astrazeneca.com.br/">
            <img src={AstraZeneca} alt={"Logo do parceiro "} />
          </a> */}

          {/* <a href="https://laboratorioblessing.com.br/" target="_blank">
            <img src={Blessing} alt={"Logo do parceiro "} />
          </a> */}

          {/* <a href="https://cortex.med.br/">
            <img src={CortexMed} alt={"Logo do parceiro "} />
          </a> */}


          {/* <a href="https://medriocheck-up.com.br/" target="_blank">
            <img src={Med_rio} alt={"Logo do parceiro "} />
          </a>

          <a href="https://grupooncoclinicas.com/" target="_blank">
            <img src={Oncoclinicas} alt={"Logo do parceiro "} />
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
          </a> */}
        </Carousel>
      </div>

    // </Partners>

    // </div>
  );
}
