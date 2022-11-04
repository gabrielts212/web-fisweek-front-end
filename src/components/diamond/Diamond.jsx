import "./Diamond.css";
import Carousel from "react-multi-carousel";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import Americas from "../../assets/images/Partners/diamond1/americas.png"
import Amil from "../../assets/images/Partners/diamond1/amil.jpg";
import AstraZeneca from "../../assets/images/Partners/diamond1/astrazeneca.jpg";
import Blessing from "../../assets/images/Partners/diamond1/blessing.jpg";
import CortexMed from "../../assets/images/Partners/diamond1/cortex-med.jpg";
import MedRio from "../../assets/images/Partners/diamond1/medrio.jpg";
import Pronep from "../../assets/images/Partners/diamond1/pronep.jpg";
import RedeHospitalCasa from "../../assets/images/Partners/diamond1/rede.jpg";
import Roche from "../../assets/images/Partners/diamond1/roche.jpg";
import Seegene from "../../assets/images/Partners/diamond1/seegene.jpg";
import Sodexo from "../../assets/images/Partners/diamond1/sodexo.jpg";
import Senac from "../../assets/images/Partners/diamond1/senac.png";
import WhiteMartins from "../../assets/images/Partners/diamond1/frame.jpg";
import Oncoclinicas from "../../assets/images/Partners/diamond1/oncoclinicas.jpg";
import Novartis from "../../assets/images/Partners/diamond1/novartis.png";

export function Diamond() {
  const { t } = useTranslation();

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
        <h2>{t("partners.partnersDiamond")}</h2>
        <div className="borderDiamond"></div>

        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={<button className="diamondbutton left" aria-label="Move Banner Left"><MdChevronLeft size={20} /></button>}
          customRightArrow={
            <button className="diamondbutton right" aria-label="Move Banner Right"><MdChevronRight size={20} /></button>
          }
          responsive={responsive}
        >
          <a href="https://www.americasmed.com.br/" target="_blank">
            <img src={Americas} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.novartis.com.br/" target="_blank">
            <img src={Novartis} alt={"Logo do parceiro "} />
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
