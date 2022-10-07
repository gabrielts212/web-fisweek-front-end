import EventsLogo from "../../assets/images/eventsfis/events-logo.png";
import EventsFiss from "../../assets/images/eventsfis/events-fis.png";
import EventsSm from "../../assets/images/eventsfis/events-sm.png";
import EventsLygga from "../../assets/images/eventsfis/events-lygga.png";
import EventsCommeets from "../../assets/images/eventsfis/events-commeets.png";
import MetricsOne from "../../assets/images/eventsfis/metrics-one.png"; 
import MetricsTwo from "../../assets/images/eventsfis/metrics-two.png"; 
import MetricsThree from "../../assets/images/eventsfis/metrics-three.png"; 
import MetricsFour from "../../assets/images/eventsfis/metrics-four.png"; 
import MetricsFive from "../../assets/images/eventsfis/metrics-five.png"; 

import { RegistrationInfo } from '../registrationInfo/RegistrationInfo'
import { Link } from "react-scroll";

import "./EventsFis.css";

export function EventsFis() {
  return (
    <div className="eventsFis" id="events">
      <img className="eventsLogo" src={EventsLogo} alt="Logo da Fisweek" />

      <div className="eventGroup">
        <div>
          <div className="fisGroup">
            <img src={EventsFiss} alt="Logo Fis" />
            <p>
              Nossa grande contribuição para a Inovação na Saúde. Um evento
              feito para ser destaque no setor, com grandes lideranças, trocas
              de experiências e muito conteúdo e interação. 100% digital e gratuito e
              com a cara da #IniciativaFIS. Nossa grande contribuição para a
              Inovação na Saúde. Um evento feito para ser destaque no setor, com
              grandes ssa grande contribuição para a Inovação na Saúde. Um
              evento feito para ser destaque no setor, com grandes lideranças,
              trocas de experiências e muito conteúdo e interação. 100% digital
              e gratuito e com a cara da #IniciativaFIS.
            </p>
            <a href="#">
              <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
                <button>Cadastrar</button>
              </Link> 
            </a>
          </div>

          <div className="lyggaGroup">
            <img src={EventsLygga} alt="Logo Lygga" />
            <p>
              Nossa grande contribuição para a Inovação na Saúde. Um evento
              feito para ser destaque no setor, com grandes lideranças, trocas
              de experiências e muito conteúdo e interação. 100% digital e gratuito e
              com a cara da #IniciativaFIS. Nossa grande contribuição para a
              Inovação na Saúde. Um evento feito para ser destaque no setor, com
              grandes ssa grande contribuição para a Inovação na Saúde. Um
              evento feito para ser destaque no setor, com grandes lideranças,
              trocas de experiências e muito conteúdo e interação. 100% digital
              e gratuito e com a cara da #IniciativaFIS.
            </p>
            <a href="#">
              <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
                <button>Cadastrar</button>
              </Link> 
            </a>
          </div>
        </div>

        <div>
          <div className="smGroup">
            <img src={EventsSm} alt="Logo Sm" />
            <p>
              Nossa grande contribuição para a Inovação na Saúde. Um evento
              feito para ser destaque no setor, com grandes lideranças, trocas
              de experiências e muito conteúdo e interação. 100% digital e gratuito e
              com a cara da #IniciativaFIS. Nossa grande contribuição para a
              Inovação na Saúde. Um evento feito para ser destaque no setor, com
              grandes ssa grande contribuição para a Inovação na Saúde. Um
              evento feito para ser destaque no setor, com grandes lideranças,
              trocas de experiências e muito conteúdo e interação. 100% digital
              e gratuito e com a cara da #IniciativaFIS.
            </p>
            <a href="#">
              <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
                <button>Cadastrar</button>
              </Link> 
            </a>
          </div>

          <div className="commeetsGroup">
            <img src={EventsCommeets} alt="Logo Commeets" />
            <p>
              Nossa grande contribuição para a Inovação na Saúde. Um evento
              feito para ser destaque no setor, com grandes lideranças, trocas
              de experiências e muito conteúdo e interação. 100% digital e gratuito e
              com a cara da #IniciativaFIS. Nossa grande contribuição para a
              Inovação na Saúde. Um evento feito para ser destaque no setor, com
              grandes ssa grande contribuição para a Inovação na Saúde. Um
              evento feito para ser destaque no setor, com grandes lideranças,
              trocas de experiências e muito conteúdo e interação. 100% digital
              e gratuito e com a cara da #IniciativaFIS.
            </p>
            <a href="#">
              <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
                <button>Cadastrar</button>
              </Link> 
            </a>
          </div>
        </div>
      </div>

      <div className="metricsGroup">
        <div className="metricsOne">
          <img src={MetricsOne} />
          <h1>+100</h1>
          <span>horas de</span>
          <br />
          <span>transmissão</span>
        </div>

        <div className="metricsTwo">
          <img src={MetricsTwo} />
          <h1>5</h1>
          <span>dias</span>
        </div>

        <div className="metricsThree">
          <img src={MetricsThree} />
          <h1>+200</h1>
          <span>empresas</span>
        </div>

        <div className="metricsFour">
          <img src={MetricsFour} />
          <h1>3</h1>
          <span>idiomas</span>
        </div>

        <div className="metricsFive">
          <img src={MetricsFive} />
          <h1>+300</h1>
          <span>palestrantes</span>
        </div>
      </div>
    </div>
  );
}
