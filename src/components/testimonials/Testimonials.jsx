import EclipseBlue from '../../assets/images/testimonials/eclipse-blue.png'
import CircleTestimonial from '../../assets/images/testimonials/circle-testimonial.png'
import ManBackground from '../../assets/images/testimonials/man-background.png'
import Man from '../../assets/images/testimonials/man.png'
import Depositions from '../../assets/images/testimonials/depositions.png'
import CiteImg from '../../assets/images/testimonials/cite.png'
import { RegistrationInfo } from '../registrationInfo/RegistrationInfo'

import { Link } from "react-scroll";

import './Testimonials.css'

export function Testimonials() {

  return (
    <div className="Testimonials" id='testimonials'>
      <header>
        <h1>Depoimentos</h1>
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
            Nossa grande contribuição para a Inovação na Saúde. 
            Um evento feito para ser destaque no setor, com grandes lideranças, 
            trocas de experiências e muito conteúdo e interação.
          </p>
          <img className="citeImg" src={CiteImg} />
          <span className="DepositionsName">Vera Valente</span>
        </div>

        <div className="Depositions">
          <img className="depositionsImg" src={Depositions} />
          <p className="citeDepositions">
            Nossa grande contribuição para a Inovação na Saúde. 
            Um evento feito para ser destaque no setor, com grandes lideranças, 
            trocas de experiências e muito conteúdo e interação.
          </p>
          <img className="citeImg" src={CiteImg} />
          <span className="DepositionsName">Nome Pessoa</span>
        </div>

        <div className="Depositions">
          <img className="depositionsImg" src={Depositions} />
          <p className="citeDepositions">
            Nossa grande contribuição para a Inovação na Saúde. 
            Um evento feito para ser destaque no setor, com grandes lideranças, 
            trocas de experiências e muito conteúdo e interação.
          </p>
          <img className="citeImg" src={CiteImg} />
          <span className="DepositionsName">Nome Pessoa</span>
        </div>
      </section>

      <div className="registrationButton">
        <a href="#">
          <Link to="registrationInfo" spy={true} smooth={true} offset={50} duration={500}>
            <button className="buttonLink">Quero me cadastrar</button>
          </Link> 
        </a>
      </div>
    </div>
  )
}
