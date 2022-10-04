import EclipseBlue from '../../assets/images/testimonials/eclipse-blue.png'
import Circle from '../../assets/images/testimonials/Circle.png'
import ManBackground from '../../assets/images/testimonials/man-background.png'
import Man from '../../assets/images/testimonials/man.png'
import Depositions from '../../assets/images/testimonials/depositions.png'

import './Testimonials.css'

export function Testimonials() {
  return (
    <div className="Testimonials">
      <header>
        <h1>Depoimentos</h1>
        <img src={EclipseBlue} alt="Circulo azul" />
      </header>

      <section className="testimonialsImages">
        <img className="ManBackground" src={ManBackground} />
        <img className="Man" src={Man} alt="Homem segurando tablet" />
        <img className="Circle" src={Circle} alt="Circulo" />
      </section>

      <section className="DepositionsGroup">
        <img className="Depositions" src={Depositions} alt="Depoimentos" />
        <img className="Depositions" src={Depositions} alt="Depoimentos" />
        <img className="Depositions" src={Depositions} alt="Depoimentos" />
      </section>

      <div className="registrationButton">
        <button className="buttonLink">Quero me cadastrar</button>
      </div>
    </div>
  )
}