// import React from "react";
import Carousel from "react-multi-carousel";

// import "react-multi-carousel/lib/styles.css";

// import { Title } from "../../../components/text";

import abramed from "../../../../images/patrocinadores/gold/abramed.svg";
import abramge from "../../../../images/patrocinadores/gold/abramgenacional.png";
import moinhodevento from "../../../../images/patrocinadores/gold/moinhodevento.png";
//import afya from "../../../../images/patrocinadores/gold/afya.svg";
// import air_liquide from "../../../../images/patrocinadores/gold/air_liquide.svg";
import anahp from "../../../../images/patrocinadores/gold/anahp.svg";
import asq from "../../../../images/patrocinadores/gold/asq.svg";
import bbraun from "../../../../images/patrocinadores/gold/bbraun.svg";
import berith from "../../../../images/patrocinadores/gold/berith.png";
import berkeley from "../../../../images/patrocinadores/gold/berkeley.svg";
import bradesco from "../../../../images/patrocinadores/gold/bradesco.svg";
import dasa from "../../../../images/patrocinadores/gold/dasa.svg";
import firjan from "../../../../images/patrocinadores/gold/firjan.svg";
import fleury from "../../../../images/patrocinadores/gold/fleury.png";
import ibkl from "../../../../images/patrocinadores/gold/ibkl.svg";
import saude_id from "../../../../images/patrocinadores/gold/saudeid.png";
import jj from "../../../../images/patrocinadores/gold/j&j.svg";
import machado_nunes from "../../../../images/patrocinadores/gold/machado_nunes.svg";
import materdei from "../../../../images/patrocinadores/gold/materdei.png";
import pfizer from "../../../../images/patrocinadores/gold/pfizer.png";
import mundivox from "../../../../images/patrocinadores/gold/mundivox.svg";
import mv from "../../../../images/patrocinadores/gold/mv.png";
import pixeon from "../../../../images/patrocinadores/gold/pixeon.svg";
import rede_dor from "../../../../images/patrocinadores/gold/rededor.png";
import sabin from "../../../../images/patrocinadores/gold/sabin.svg";
import saude_residencia from "../../../../images/patrocinadores/gold/saude_residencia.svg";
import sinapse from "../../../../images/patrocinadores/gold/sinapse.svg";
import thb from "../../../../images/patrocinadores/gold/thb.svg";
import totus from "../../../../images/patrocinadores/gold/totus.svg";
import vventures from "../../../../images/patrocinadores/gold/vventures.svg";
import fena_saude from "../../../../images/patrocinadores/gold/fenasaude.png";
import careon from "../../../../images/patrocinadores/gold/Careon.png";
import gsk from "../../../../images/patrocinadores/gold/gsk.png";

export default function GoldComponent(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Gold top={top}>
      <Title>{props.lang.TITLE_2}</Title>
      <div className="carousel" id="gold-carousel">
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          responsive={responsive}
          customLeftArrow={<button className="teste left"></button>}
          customRightArrow={<button className="teste right"></button>}
        >
          <a href="https://www.abramed.org.br" target="_blank">
            <img className="gold-partner" src={abramed} alt={"Logo do parceiro "} />
          </a>

          <a href="https://abramge.com.br/portal/index.php/pt-BR/">
            <img className="gold-partner" src={abramge} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.anahp.com.br/">
            <img className="gold-partner" src={anahp} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.bbraun.com.br/pt.html">
            <img className="gold-partner" src={bbraun} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.berithadv.com.br/">
            <img className="gold-partner" src={berith} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.berkeley.edu/">
            <img className="gold-partner" src={berkeley} alt={"Logo do parceiro "} />
          </a>

          <a href="https://banco.bradesco/html/classic/index.shtm">
            <img className="gold-partner" src={bradesco} alt={"Logo do parceiro "} />
          </a>

          <a href="https://careonbrasil.com.br/">
            <img className="gold-partner" src={careon} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.fenasaude.org.br/" target="_blank">
            <img className="gold-partner" src={fena_saude} alt={"Logo do parceiro "} />
          </a>
          <a
            href="https://www.firjan.com.br/sesi/empresas/qualidade-de-vida/check-up-saude/"
            target="_blank"
          >
            <img className="gold-partner" src={firjan} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.grupofleury.com.br/SitePages/Home.aspx" target="_blank">
            <img className="gold-partner" src={fleury} alt={"Logo do parceiro "} />
          </a>

          <a href="http://ibkl.com.br/" target="_blank">
            <img className="gold-partner" src={ibkl} alt={"Logo do parceiro "} />
          </a>
          <a href="https://www.jnjbrasil.com.br/">
            <img className="gold-partner" src={jj} alt={"Logo do parceiro"} />
          </a>

          <a href="https://www.materdei.com.br/">
            <img className="gold-partner" src={materdei} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.pfizer.com.br/">
            <img className="gold-partner" src={pfizer} alt={"Logo do parceiro "} />
          </a>

          <a
            href="https://br.gsk.com/pt-br/?cc=br_psea_ac_not_applicable_45566&gclid=CjwKCAjwzaSLBhBJEiwAJSRoknpi1MW9t0Nqo4gxAaKJZDOmFNwkbhQoXp8AwkWN66do1Z_1vQCA8BoCTicQAvD_BwE"
            target="_blank"
          >
            <img className="gold-partner" src={gsk} alt={"Logo do parceiro "} />
          </a>

          <a href="https://www.rededorsaoluiz.com.br/" target="_blank">
            <img className="gold-partner" src={rede_dor} alt={"Logo do parceiro "} />
          </a>

          <a className="https://www.sabin.com.br/">
            <img className="gold-partner" src={sabin} alt={"Logo do parceiro "} />
          </a>

          <a href="https://sinapsesaude.com.br/">
            <img className="gold-partner" src={sinapse} alt={"Logo do parceiro "} />
          </a>

          <a href="#">
            <img className="gold-partner" src={vventures} alt={"Logo do parceiro "} />
          </a>
        </Carousel>
      </div>
    </Gold>
  );
}
