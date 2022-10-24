import "./Diamond.css";
import Carousel from "react-multi-carousel";

import Americas from "../../assets/images/Partners/diamond/americas.svg";
import Amil from "../../assets/images/Partners/diamond/amil.svg";
import AstraZeneca from "../../assets/images/Partners/diamond/astra-zeneca.svg";
import Blessing from "../../assets/images/Partners/diamond/Blessing.png";
import CortexMed from "../../assets/images/Partners/diamond/cortex-med.svg";
import MedRio from "../../assets/images/Partners/diamond/med-rio.svg";
// import Microsoft from "../../assets/images/Partners/diamond/microsoft.png";
import Pronep from "../../assets/images/Partners/diamond/pronep.png";
import RedeHospitalCasa from "../../assets/images/Partners/diamond/rede-hospital-casa.svg";
import Roche from "../../assets/images/Partners/diamond/roche.svg";
import Seegene from "../../assets/images/Partners/diamond/seegene.svg";
import Sodexo from "../../assets/images/Partners/diamond/sodexo.png";
import Senac from "../../assets/images/Partners/diamond/senac.png";
import WhiteMartins from "../../assets/images/Partners/diamond/white-martins.png";
import Oncoclinicas from "../../assets/images/Partners/diamond/Oncoclinicas.png";

export function Diamond(){
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

    return(
      <div className="diamond">
        <h2>Parceiros Diamond</h2>
        <div className="borderDiamond"></div>

        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={<button className="diamondbutton left" aria-label="Move Banner Left"><i class="fa fa-close"></i></button>}
          customRightArrow={
            <button className="diamondbutton right" aria-label="Move Banner Right"><i class="fa fa-close"></i></button>
          }
          responsive={responsive}
        >
          <a href="https://www.americasmed.com.br/" target="_blank">
            <img src={Americas} alt={"Logo do parceiro "} />
          </a>
          <a href="http://www.amil.com.br/institucional/#/" target="_blank">
            <img src={Amil} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.astrazeneca.com.br/">
            <img src={AstraZeneca} alt={"Logo do parceiro "} />
          </a>

          <a href="https://laboratorioblessing.com.br/" target="_blank">
            <img src={Blessing} alt={"Logo do parceiro "} />
          </a>

          <a href="https://cortex.med.br/">
            <img src={CortexMed} alt={"Logo do parceiro "} />
          </a>

          <a href="https://medriocheck-up.com.br/" target="_blank">
            <img src={MedRio} alt={"Logo do parceiro "} />
          </a>

          <a href="https://grupooncoclinicas.com/" target="_blank">
            <img src={Oncoclinicas} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.pronep.com.br" target="_blank">
            <img src={Pronep} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.redehospitalcasa.com.br/" target="_blank">
            <img src={RedeHospitalCasa} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.roche.com.br/">
            <img src={Roche} alt={"Logo do parceiro "} />
          </a>

          <a href="https://seegenebrazil.com.br/" target="_blank">
            <img src={Seegene} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.senac.br/" target="_blank">
            <img src={Senac} alt={"Logo do parceiro "} />
          </a>

          <a href="https://br.sodexo.com/" target="_blank">
            <img src={Sodexo} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.praxair.com.br/" target="_blank">
            <img src={WhiteMartins} alt={"Logo do parceiro "} />
          </a>
        </Carousel>
      </div>
    )
}
