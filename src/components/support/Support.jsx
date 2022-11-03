import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import "./Support.css"

import Abimed from "../../assets/images/Partners/apoio1/abimed.png";
import Abcis from "../../assets/images/Partners/apoio1/abcis.png";
import Abimo from "../../assets/images/Partners/apoio1/abimo.png";
import Abo20 from "../../assets/images/Partners/apoio1/abo20.png";
import Abrafarma from "../../assets/images/Partners/apoio1/abrafarma.png";
import Abramed from "../../assets/images/Partners/apoio1/abramed.png";
import Abramge from "../../assets/images/Partners/apoio1/abramge.png";
import Abrasp from "../../assets/images/Partners/apoio1/abrasp.png";
import Abstartups from "../../assets/images/Partners/apoio1/abstartups.png";
import Acate from "../../assets/images/Partners/apoio1/acate.png";
import Ahcrj from "../../assets/images/Partners/apoio1/ahcrj.png";
import Aherj from "../../assets/images/Partners/apoio1/aherj.png";
import Anahp_2 from "../../assets/images/Partners/apoio1/anahp_2.png";
import Biominas from "../../assets/images/Partners/apoio1/biominas.png";
import Brasscom from "../../assets/images/Partners/apoio1/brasscom.png";
import Camara_rio from "../../assets/images/Partners/apoio1/camarario.png";
import Cbexs from "../../assets/images/Partners/apoio1/cbexs.png";
import Cnsaude from "../../assets/images/Partners/apoio1/cnsaude.png";
import Eretz from "../../assets/images/Partners/apoio1/eretz.png";
import Fbah from "../../assets/images/Partners/apoio1/fbah.png";
import Fbh from "../../assets/images/Partners/apoio1/fbh.png";
import Febase from "../../assets/images/Partners/apoio1/febase.png";
import Feherj from "../../assets/images/Partners/apoio1/feherj.png";
import Fehoesp from "../../assets/images/Partners/apoio1/fehoesp.png";
import Fehosul from "../../assets/images/Partners/apoio1/fehosul.png";
import Hospitalar from "../../assets/images/Partners/apoio1/hospitalar.png";
import Institutosante from "../../assets/images/Partners/apoio1/institutosante.png";
import Sbis from "../../assets/images/Partners/apoio1/sbis.png";
import Sind_hosp from "../../assets/images/Partners/apoio1/sindhospe.png";
import Sind_hosp_rj from "../../assets/images/Partners/apoio1/sindhosprj.png";
import Sind_hosp_sp from "../../assets/images/Partners/apoio1/sindhosp.png";
import Sindihospa from "../../assets/images/Partners/apoio1/sindihospa.png";
import Sindusfarma from "../../assets/images/Partners/apoio1/sindusfarma.png";
import Sp_gov from "../../assets/images/Partners/apoio1/spgov.png";
import Uff from "../../assets/images/Partners/apoio1/uff.png";
import Sbh from "../../assets/images/Partners/apoio1/sbh.png";
import Cremerj from "../../assets/images/Partners/apoio1/cremerj.png";
import Cubo from "../../assets/images/Partners/apoio1/cubo.png";
import Israel from "../../assets/images/Partners/apoio1/israel.png";
import Nead from "../../assets/images/Partners/apoio1/nead.png";
import Porto_digital from "../../assets/images/Partners/apoio1/portaldigital.png";
import I2h from "../../assets/images/Partners/apoio1/ih2.png";
import Inei from "../../assets/images/Partners/apoio1/inei.png";
import iess from "../../assets/images/Partners/apoio1/iess.png";
import abes from "../../assets/images/Partners/apoio1/abes.png";
import Anm from "../../assets/images/Partners/apoio1/anm.png";


export  function Support() {
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
      <div id="supportCarousel">
      <h2 className="Support">{t("partners.support")}</h2>
      <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2500}
          customTransition="1000ms ease-in-out"
          draggable={false}
          customLeftArrow={
          <button className="supportbutton left" aria-label="Move Banner Left"><MdChevronLeft size={20} /></button>}
          customRightArrow={
            <button className="supportbutton right" aria-label="Move Banner Right"><MdChevronRight size={20} /></button>
          }
          responsive={responsive}
        >
          
          <img
            src={Abcis}
            alt={"Logo do parceiro"}
            className="supportPartner"
          />
          <a href="https://abimed.org.br/" target="_blank">
            <img
              src={Abimed}
              alt={"Logo do parceiro"}
              className="supportPartner"
            />
          </a>

          <a href="https://abimo.org.br/" target="_blank">
            <img
              src={Abimo}
              alt={"Logo do parceiro"}
              className="supportPartner"
            />
          </a>

          <a href="https://www.ixconference.com.br/" target="_blank">
            <img
              src={Abo20}
              alt={"Logo do parceiro"}
              className="supportPartner"
            />
          </a>

          <a href="https://www.abrafarma.com.br" target="_blank">
            <img
              src={Abrafarma}
              alt={"Logo do parceiro"}
              className="supportPartner"
            />
          </a>

          <a href="https://abramed.org.br/" target="_blank">
            <img
              src={Abramed}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a
            href="https://abramge.com.br/portal/index.php/pt-BR/"
            target="_blank"
          >
            <img
              src={Abramge}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.abrasp.org.br/" target="_blank">
            <img
              src={Abrasp}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://abstartups.com.br/" target="_blank">
            <img
              src={Abstartups}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.acate.com.br/" target="_blank">
            <img
              src={Acate}
              alt={"Logo do parceiro"}
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
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.anahp.com.br/" target="_blank">
            <img
              src={Anahp_2}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.gov.br/anm/pt-br" target="_blank">
            <img
              src={Anm}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>


          <a href="https://biominas.org.br/" target="_blank">
            <img
              src={Biominas}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://brasscom.org.br/" target="_blank">
            <img
              src={Brasscom}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="http://www.camara.rio/" target="_blank">
            <img
              src={Camara_rio}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://cbexs.com.br/" target="_blank">
            <img
              src={Cbexs}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="http://cnsaude.org.br/" target="_blank">
            <img
              src={Cnsaude}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.israeltrade.org.br" target="_blank">
            <img
              src={Israel}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.cremerj.org.br/" target="_blank">
            <img
              src={Cremerj}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://cubo.network/" target="_blank">
            <img
              src={Cubo}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://eretz.bio/" target="_blank">
            <img
              src={Eretz}
              alt={"Logo do parceiro"}
              className="apoio-partner"
            />
          </a>

          <a href="https://www.fbah.org.br" target="_blank">
            <img
              src={Fbah}
              alt={"Logo do parceiro"}
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


          <a href="https://institutosante.com.br/" target="_blank">
            <img
              src={Institutosante}
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
    
              <a href="https://ineidf.com.br/" target="_blank">
                <img
                  src={Inei}
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
          <a href="https://www.iess.org.br/" target="_blank">
            <img
              src={iess}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>
          <a href="https://www.abes.org.br" target="_blank">
            <img
              src={abes}
              alt={"Logo do parceiro "}
              className="apoio-partner"
            />
          </a>
        </Carousel>
      </div>
  );
}
