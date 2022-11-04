import EclipseBlue from '../../assets/images/testimonials/eclipse-blue.png'
import CircleTestimonial from '../../assets/images/testimonials/circle-testimonial.png'
import ManBackground from '../../assets/images/testimonials/man-background.png'
import Man from '../../assets/images/testimonials/man.png'
import Depositions from '../../assets/images/testimonials/depositions.png'
import CiteImg from '../../assets/images/testimonials/cite.png'

import { RegistrationInfo } from '../registrationInfo/RegistrationInfo'
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

import './Testimonials.css'

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className="Testimonials" id='testimonials'>
      <header>
        <h1>{t("declaration.declaration")}</h1>
        <img src={EclipseBlue} alt="Circulo Azul" />
      </header>

      <section className="testimonialsImages">
        <img className="ManBackground" src={ManBackground} />
        <img className="Man" src={Man} alt="Homem segurando tablet" />
        <img className="circleTestimonial" src={CircleTestimonial} alt="Circulo" />
      </section>

      <section className="DepositionsGroup">
        <div className="Depositions">
          <img className="depositionsImg" src={Depositions} />
          <p className="citeDepositions">
            {t("declaration.d1")}
          </p>
          <img className="citeImg" src={CiteImg} />
          <span className="DepositionsName">Lídia Abdalla</span>
        </div>

        <div className="Depositions">
          <img className="depositionsImg" src={Depositions} />
          <p className="citeDepositions">
            {t("declaration.d2")}
          </p>
          <img className="citeImg" src={CiteImg} />
          <span className="DepositionsName">Arthur Lima</span>
        </div>
{/* 
        <div className="Depositions">
          <img className="depositionsImg" src={Depositions} />
          <p className="citeDepositions">
            {t("declaration.d3")}
          </p>
          <img className="citeImg" src={CiteImg} />
          <span className="DepositionsName">Nome Pessoa</span>
        </div> */}
      </section>

      <div className="registrationButton">
        <a href="#">
          <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
            <button className="buttonLink">{t("declaration.iWantToSubscribe")}</button>
          </Link> 
        </a>
      </div>
    </div>
  )
}
