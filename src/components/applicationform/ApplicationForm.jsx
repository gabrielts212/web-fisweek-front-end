import GeometricShapes12 from '../../assets/images/geometric-shapes12.png';
import GeometricShapes13 from '../../assets/images/geometric-shapes13.png';

import './ApplicationForm.css';

export function ApplicationForm() {
  return (
    <div>
      <img className="geometric-shapes12" src={GeometricShapes12} alt="GeometricShapes12" />
      <img className="geometric-shapes13" src={GeometricShapes13} alt="GeometricShapes13" />
      
      <form className="application-form" action="POST">
        <label className="caption-title">
          Faça sua inscrição
          <input type="text" name="name" placeholder="Nome" />
          <input type="text" name="name" placeholder="Sobrenome" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="name" placeholder="Conhecia a Iniciativa?" />
          <input type="text" name="name" placeholder="Como soube do evento?" />
          <div>
            <select className="form-control">
              <option>Qual evento gostaria de participar?</option>
              <option value="Fis">Fis</option>
              <option value="S/M">S/M</option>
              <option value="Lygga">Lygga</option>
              <option value="Com .Meets">Com .Meets</option>
              <option value="Startups">Startups</option>
            </select>
          </div>
          <input type="number" name="number" placeholder="Idade" />
          <button type="submit">Cadastra-se</button>
        </label>
      </form>
    </div>
  )
}
