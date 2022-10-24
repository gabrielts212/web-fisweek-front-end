import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Apoio.css"

import Abimed from "../../assets/images/Partners/apoio/abimed.svg";
import Abcis from "../../assets/images/Partners/apoio/abcis.svg";
import Abimo from "../../assets/images/Partners/apoio/abimo.svg";
import Abo20 from "../../assets/images/Partners/apoio/ABO20.png";
import Abrafarma from "../../assets/images/Partners/apoio/abrafarma.svg";
import Abramed from "../../assets/images/Partners/apoio/abramed.svg";
import Abramge from "../../assets/images/Partners/apoio/abramge.svg";
import Abrasp from "../../assets/images/Partners/apoio/abrasp.svg";
import Abstartups from "../../assets/images/Partners/apoio/abstartups.svg";
import Acate from "../../assets/images/Partners/apoio/acate.svg";
import Ahcrj from "../../assets/images/Partners/apoio/ahcrj.svg";
import Aherj from "../../assets/images/Partners/apoio/aherj.svg";
import Anahp_2 from "../../assets/images/Partners/apoio/anahp_2.svg";
import Anm from "../../assets/images/Partners/apoio/anm.svg";
import Biominas from "../../assets/images/Partners/apoio/biominas.svg";
import Brasscom from "../../assets/images/Partners/apoio/brasscom.svg";
import Camara_rio from "../../assets/images/Partners/apoio/camara_rio.svg";
import Cbexs from "../../assets/images/Partners/apoio/cbexs.svg";
import Cnsaude from "../../assets/images/Partners/apoio/cnsaude.svg";
import Cremerj from "../../assets/images/Partners/apoio/cremerj.svg";
import Cubo from "../../assets/images/Partners/apoio/cubo.svg";
import Eretz from "../../assets/images/Partners/apoio/eretz.svg";
import Fbah from "../../assets/images/Partners/apoio/fbah.svg";
import Fbh from "../../assets/images/Partners/apoio/fbh.svg";
import Febase from "../../assets/images/Partners/apoio/febase.svg";
import Feherj from "../../assets/images/Partners/apoio/feherj.svg";
import Fehoesp from "../../assets/images/Partners/apoio/fehoesp.svg";
import Fehosul from "../../assets/images/Partners/apoio/fehosul.svg";
import Hospitalar from "../../assets/images/Partners/apoio/hospitalar.svg";
import Institutosante from "../../assets/images/Partners/apoio/institutosante.png";
import I2h from "../../assets/images/Partners/apoio/i2h.svg";
import Iess from "../../assets/images/Partners/apoio/iess.svg";
import Inei from "../../assets/images/Partners/apoio/inei.svg";
import Israel from "../../assets/images/Partners/apoio/israel.svg";
import Nead from "../../assets/images/Partners/apoio/nead.svg";
import Porto_digital from "../../assets/images/Partners/apoio/porto_digital.svg";
import Sbis from "../../assets/images/Partners/apoio/sbis.svg";
import Sind_hosp from "../../assets/images/Partners/apoio/sind_hosp.svg";
import Sind_hosp_rj from "../../assets/images/Partners/apoio/sind_hosp_rj.svg";
import Sind_hosp_sp from "../../assets/images/Partners/apoio/sind_hosp_sp.svg";
import Sindihospa from "../../assets/images/Partners/apoio/sindihospa.svg";
// import Sindessmat from "../../assets/images/Partners/apoio/sindessmat.svg";
import Sindusfarma from "../../assets/images/Partners/apoio/sindusfarma.svg";
import Sp_gov from "../../assets/images/Partners/apoio/sp_gov.svg";
import Uff from "../../assets/images/Partners/apoio/uff.svg";
import Sbh from "../../assets/images/Partners/apoio/sbh.svg";


export  function Apoio() {
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
      <div id="apoio-carousel">
      <h2 className="apoio">Apoio</h2>
      <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={
          <button className="apoiobutton left" aria-label="Move Banner Left"><i class="fa fa-close"></i></button>}
          customRightArrow={
            <button className="apoiobutton right" aria-label="Move Banner Right"><i class="fa fa-close"></i></button>
          }
          responsive={responsive}
        >
          
          <img
            src={Abcis}
            alt={"Logo do parceiro "}
            className="apoio-partner"
          />
<a href="https://abimed.org.br/" target="_blank">
            <img
              src={Abimed}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://abimo.org.br/" target="_blank">
            <img
              src={Abimo}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.ixconference.com.br/" target="_blank">
            <img
              src={Abo20}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.abrafarma.com.br" target="_blank">
            <img
              src={Abrafarma}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://abramed.org.br/" target="_blank">
            <img
              src={Abramed}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://abramge.com.br/portal/index.php/pt-BR/"
            target="_blank"
          >
            <img
              src={Abramge}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.abrasp.org.br/" target="_blank">
            <img
              src={Abrasp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://abstartups.com.br/" target="_blank">
            <img
              src={Abstartups}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.acate.com.br/" target="_blank">
            <img
              src={Acate}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.ahcrj.com.br/" target="_blank">
            <img
              src={Ahcrj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.aherj.com.br" target="_blank">
            <img
              src={Aherj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.anahp.com.br/" target="_blank">
            <img
              src={Anahp_2}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.gov.br/anm/pt-br" target="_blank">
            <img
              src={Anm}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>


          <a href="https://biominas.org.br/" target="_blank">
            <img
              src={Biominas}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://brasscom.org.br/" target="_blank">
            <img
              src={Brasscom}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.camara.rio/" target="_blank">
            <img
              src={Camara_rio}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://cbexs.com.br/" target="_blank">
            <img
              src={Cbexs}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://cnsaude.org.br/" target="_blank">
            <img
              src={Cnsaude}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.israeltrade.org.br" target="_blank">
            <img
              src={Israel}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.cremerj.org.br/" target="_blank">
            <img
              src={Cremerj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://cubo.network/" target="_blank">
            <img
              src={Cubo}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://eretz.bio/" target="_blank">
            <img
              src={Eretz}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.fbah.org.br" target="_blank">
            <img
              src={Fbah}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.fbh.com.br/" target="_blank">
            <img
              src={Fbh}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://cnsaude.org.br/federacoes/febase/" target="_blank">
            <img
              src={Febase}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.sindherj.com.br." target="_blank">
            <img
              src={Feherj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://fehoesp360.org.br/" target="_blank">
            <img
              src={Fehoesp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.fehosul.org.br/" target="_blank">
            <img
              src={Fehosul}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.hospitalar.com/pt/home.html" target="_blank">
            <img
              src={Hospitalar}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.i2h.com.br/" target="_blank">
            <img
              src={I2h}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.iess.org.br/" target="_blank">
            <img
              src={Iess}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://ineidf.com.br/" target="_blank">
            <img
              src={Inei}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://institutosante.com.br/" target="_blank">
            <img
              src={Institutosante}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.neadsaude.org.br/" target="_blank">
            <img
              src={Nead}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://www.portodigital.org/parque/o-que-e-o-porto-digital"
            target="_blank"
          >
            <img
              src={Porto_digital}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.saopaulo.sp.gov.br/" target="_blank">
            <img
              src={Sp_gov}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://sbis.org.br/">
            <img
              src={Sbis}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://sindihospa.com.br/">
            <img
              src={Sindihospa}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://sindhospe.org.br" target="_blank">
            <img
              src={Sind_hosp_sp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://fehoesp360.org.br/sindicato/sindhosp/"
            target="_blank"
          >
            <img
              src={Sind_hosp}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.sindhrio.org.br" target="_blank">
            <img
              src={Sind_hosp_rj}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="http://sbhdf.org.br/sindicato/">
            <img
              src={Sbh}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://sindusfarma.org.br/" target="_blank">
            <img
              src={Sindusfarma}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.uff.br/">
            <img
              src={Uff}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>

          
        </Carousel>
      </div>
    
  );
}
