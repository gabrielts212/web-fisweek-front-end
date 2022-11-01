import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import "./Gold.css";

import Abramed from "../../assets/images/Partners/gold1/abramed.png";
import Abramge from "../../assets/images/Partners/gold1/abramge.png";
import Anahp from "../../assets/images/Partners/gold1/anahp.png";
import Berith from "../../assets/images/Partners/gold1/berith.png";
import Berkeley from "../../assets/images/Partners/gold1/berkeley.png";
import Bradesco from "../../assets/images/Partners/gold1/bradesco.png";
import Firjan from "../../assets/images/Partners/gold1/firjan.png";
import Ibkl from "../../assets/images/Partners/gold1/ibkl.png";
import Jj from "../../assets/images/Partners/gold1/johnson.png";
import Materdei from "../../assets/images/Partners/gold1/materdei.png";
import Pfizer from "../../assets/images/Partners/gold1/pfizer.png";
import Rede_dor from "../../assets/images/Partners/gold1/rededor.png";
import Sabin from "../../assets/images/Partners/gold1/sabin.png";
import Sinapse from "../../assets/images/Partners/gold1/sinapse.png";
import Vventures from "../../assets/images/Partners/gold1/vventures.png";
import Fena_saude from "../../assets/images/Partners/gold1/fenasaude.png";
import Careon from "../../assets/images/Partners/gold1/careon.png";
import Fleury from "../../assets/images/Partners/gold1/fleury.png";
// import Gsk from "../../assets/images/Partners/gold1/gsk.png";

export function Gold() {
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

    
    return (
    <div className="gold">
      <h2 className="h2Gold">{t("partners.partnersGold")}</h2>
      <div className="borderGold"></div>

        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={<button className="apoiobutton left" aria-label="Move Banner Left"><MdChevronLeft size={20} /></button>}
          customRightArrow={
            <button className="apoiobutton right" aria-label="Move Banner Right"><MdChevronRight size={20} /></button>
          }
          responsive={responsive}
        >
          <a href="https://www.abramed.org.br" target="_blank">
            <img className="" src={Abramed} alt={"Logo do parceiro "} />
          </a>

          <a href="https://abramge.com.br/portal/index.php/pt-BR/">
            <img className="gold-partner" src={Abramge} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.anahp.com.br/">
            <img className="gold-partner" src={Anahp} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.berithadv.com.br/">
            <img className="gold-partner" src={Berith} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.berkeley.edu/">
            <img className="gold-partner" src={Berkeley} alt={"Logo do parceiro "} />
          </a>

          <a href="https://banco.bradesco/html/classic/index.shtm">
            <img className="gold-partner" src={Bradesco} alt={"Logo do parceiro "} />
          </a>

          <a href="https://careonbrasil.com.br/">
            <img className="gold-partner" src={Careon} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.fenasaude.org.br/" target="_blank">
            <img className="gold-partner" src={Fena_saude} alt={"Logo do parceiro "} />
          </a>
          <a
            href="https://www.firjan.com.br/sesi/empresas/qualidade-de-vida/check-up-saude/"
            target="_blank"
          >
            <img className="gold-partner" src={Firjan} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.grupofleury.com.br/SitePages/Home.aspx" target="_blank">
            <img className="gold-partner" src={Fleury} alt={"Logo do parceiro "} />
          </a>

          <a href="http://ibkl.com.br/" target="_blank">
            <img className="gold-partner" src={Ibkl} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.jnjbrasil.com.br/">
            <img className="gold-partner" src={Jj} alt={"Logo do parceiro"} />
          </a>

          <a href="https://www.materdei.com.br/">
            <img className="gold-partner" src={Materdei} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.pfizer.com.br/">
            <img className="gold-partner" src={Pfizer} alt={"Logo do parceiro "} />
          </a>

          {/* <a
            href="https://br.gsk.com/pt-br/?cc=br_psea_ac_not_applicable_45566&gclid=CjwKCAjwzaSLBhBJEiwAJSRoknpi1MW9t0Nqo4gxAaKJZDOmFNwkbhQoXp8AwkWN66do1Z_1vQCA8BoCTicQAvD_BwE"
            target="_blank"
          >
            <img className="gold-partner" src={Gsk} alt={"Logo do parceiro "} />
          </a> */}

          <a href="https://www.rededorsaoluiz.com.br/" target="_blank">
            <img className="gold-partner" src={Rede_dor} alt={"Logo do parceiro "} />
          </a>

          <a className="https://www.sabin.com.br/">
            <img className="gold-partner" src={Sabin} alt={"Logo do parceiro "} />
          </a>

          <a href="https://sinapsesaude.com.br/">
            <img className="gold-partner" src={Sinapse} alt={"Logo do parceiro "} />
          </a>

          <a href="#">
            <img className="gold-partner" src={Vventures} alt={"Logo do parceiro "} />
          </a>
        </Carousel> 
    </div>
  );
}
