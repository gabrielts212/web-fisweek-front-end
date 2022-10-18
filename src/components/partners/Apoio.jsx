// import React from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// import { Title } from "../../../components/text";

import abimed from "../../../../images/patrocinadores/apoio/abimed.svg";
import abcis from "../../../../images/patrocinadores/apoio/abcis.svg";
// import abes from "../../../../images/patrocinadores/apoio/abes.svg";
import abimo from "../../../../images/patrocinadores/apoio/abimo.svg";
import abo20 from "../../../../images/patrocinadores/apoio/ABO20.png";
import abrafarma from "../../../../images/patrocinadores/apoio/abrafarma.svg";
import abramed_2 from "../../../../images/patrocinadores/apoio/abramed_2.svg";
import abramge_2 from "../../../../images/patrocinadores/apoio/abramge_2.svg";
import abrasp from "../../../../images/patrocinadores/apoio/abrasp.svg";
import abstartups from "../../../../images/patrocinadores/apoio/abstartups.svg";
import acate from "../../../../images/patrocinadores/apoio/acate.svg";
import ahcrj from "../../../../images/patrocinadores/apoio/ahcrj.svg";
import aherj from "../../../../images/patrocinadores/apoio/aherj.svg";
import anahp_2 from "../../../../images/patrocinadores/apoio/anahp_2.svg";
import anm from "../../../../images/patrocinadores/apoio/anm.svg";
// import assespro from "../../../../images/patrocinadores/apoio/assespro.svg";
import biominas from "../../../../images/patrocinadores/apoio/biominas.svg";
import brasscom from "../../../../images/patrocinadores/apoio/brasscom.svg";
import camara_rio from "../../../../images/patrocinadores/apoio/camara_rio.svg";
import cbexs from "../../../../images/patrocinadores/apoio/cbexs.svg";
import cnsaude from "../../../../images/patrocinadores/apoio/cnsaude.svg";
import cremerj from "../../../../images/patrocinadores/apoio/cremerj.svg";
import cubo from "../../../../images/patrocinadores/apoio/cubo.svg";
import eretz from "../../../../images/patrocinadores/apoio/eretz.svg";
import fbah from "../../../../images/patrocinadores/apoio/fbah.svg";
import fbh from "../../../../images/patrocinadores/apoio/fbh.svg";
import febase from "../../../../images/patrocinadores/apoio/febase.svg";
import feherj from "../../../../images/patrocinadores/apoio/feherj.svg";
import fehoesp from "../../../../images/patrocinadores/apoio/fehoesp.svg";
import fehosul from "../../../../images/patrocinadores/apoio/fehosul.svg";
import hospitalar from "../../../../images/patrocinadores/apoio/hospitalar.svg";
import institutosante from "../../../../images/patrocinadores/apoio/institutosante.png";
import i2h from "../../../../images/patrocinadores/apoio/i2h.svg";
import iess from "../../../../images/patrocinadores/apoio/iess.svg";
import inei from "../../../../images/patrocinadores/apoio/inei.svg";
import israel from "../../../../images/patrocinadores/apoio/israel.svg";
import nead from "../../../../images/patrocinadores/apoio/nead.svg";
import porto_digital from "../../../../images/patrocinadores/apoio/porto_digital.svg";
import sbis from "../../../../images/patrocinadores/apoio/sbis.svg";
import sind_hosp from "../../../../images/patrocinadores/apoio/sind_hosp.svg";
import sind_hosp_rj from "../../../../images/patrocinadores/apoio/sind_hosp_rj.svg";
import sind_hosp_sp from "../../../../images/patrocinadores/apoio/sind_hosp_sp.svg";
import sindihospa from "../../../../images/patrocinadores/apoio/sindihospa.svg";
import sindessmat from "../../../../images/patrocinadores/apoio/sindessmat.svg";
import sindusfarma from "../../../../images/patrocinadores/apoio/sindusfarma.svg";
import sp_gov from "../../../../images/patrocinadores/apoio/sp_gov.svg";
import uff from "../../../../images/patrocinadores/apoio/uff.svg";
import sbh from "../../../../images/patrocinadores/apoio/sbh.svg";

export default function ApoioComponent(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Apoio>
      <Title>{props.lang.TITLE_3}</Title>
      <div className="carousel" id="apoio-carousel">
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={<button className="teste left"></button>}
          customRightArrow={<button className="teste right"></button>}
          responsive={responsive}
        >
          <img
            src={abcis}
            alt={"Logo do parceiro "}
            className="apoio-partner"
          />

          {/* 
          
           <a href="https://www.abes.org.br" target="_blank">
            <img
              src={abes}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>
          
          
          */}

          <a href="https://abimed.org.br/" target="_blank">
            <img
              src={abimed}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://abimo.org.br/" target="_blank">
            <img
              src={abimo}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.ixconference.com.br/" target="_blank">
            <img
              src={abo20}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.abrafarma.com.br" target="_blank">
            <img
              src={abrafarma}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://abramed.org.br/" target="_blank">
            <img
              src={abramed_2}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://abramge.com.br/portal/index.php/pt-BR/"
            target="_blank"
          >
            <img
              src={abramge_2}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.abrasp.org.br/" target="_blank">
            <img
              src={abrasp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://abstartups.com.br/" target="_blank">
            <img
              src={abstartups}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.acate.com.br/" target="_blank">
            <img
              src={acate}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.ahcrj.com.br/" target="_blank">
            <img
              src={ahcrj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.aherj.com.br" target="_blank">
            <img
              src={aherj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.anahp.com.br/" target="_blank">
            <img
              src={anahp_2}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.gov.br/anm/pt-br" target="_blank">
            <img
              src={anm}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          {/* 
          
          
          <img
            src={assespro}
            alt={"Logo do parceiro "}
            className="apoio-partner"
          />
          
          
          */}

          <a href="https://biominas.org.br/" target="_blank">
            <img
              src={biominas}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://brasscom.org.br/" target="_blank">
            <img
              src={brasscom}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.camara.rio/" target="_blank">
            <img
              src={camara_rio}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://cbexs.com.br/" target="_blank">
            <img
              src={cbexs}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://cnsaude.org.br/" target="_blank">
            <img
              src={cnsaude}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.israeltrade.org.br" target="_blank">
            <img
              src={israel}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.cremerj.org.br/" target="_blank">
            <img
              src={cremerj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://cubo.network/" target="_blank">
            <img
              src={cubo}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://eretz.bio/" target="_blank">
            <img
              src={eretz}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.fbah.org.br" target="_blank">
            <img
              src={fbah}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.fbh.com.br/" target="_blank">
            <img
              src={fbh}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://cnsaude.org.br/federacoes/febase/" target="_blank">
            <img
              src={febase}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.sindherj.com.br." target="_blank">
            <img
              src={feherj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://fehoesp360.org.br/" target="_blank">
            <img
              src={fehoesp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.fehosul.org.br/" target="_blank">
            <img
              src={fehosul}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.hospitalar.com/pt/home.html" target="_blank">
            <img
              src={hospitalar}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.i2h.com.br/" target="_blank">
            <img
              src={i2h}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.iess.org.br/" target="_blank">
            <img
              src={iess}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://ineidf.com.br/" target="_blank">
            <img
              src={inei}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://institutosante.com.br/" target="_blank">
            <img
              src={institutosante}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.neadsaude.org.br/" target="_blank">
            <img
              src={nead}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://www.portodigital.org/parque/o-que-e-o-porto-digital"
            target="_blank"
          >
            <img
              src={porto_digital}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.saopaulo.sp.gov.br/" target="_blank">
            <img
              src={sp_gov}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://sbis.org.br/">
            <img
              src={sbis}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://sindihospa.com.br/">
            <img
              src={sindihospa}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://sindhospe.org.br" target="_blank">
            <img
              src={sind_hosp_sp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://fehoesp360.org.br/sindicato/sindhosp/"
            target="_blank"
          >
            <img
              src={sind_hosp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.sindhrio.org.br" target="_blank">
            <img
              src={sind_hosp_rj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://sbhdf.org.br/sindicato/">
            <img
              src={sbh}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://sindusfarma.org.br/" target="_blank">
            <img
              src={sindusfarma}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.uff.br/">
            <img
              src={uff}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>
        </Carousel>
      </div>
    </Apoio>
  );
}
