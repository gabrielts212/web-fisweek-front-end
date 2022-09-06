import { Button } from '../button/Button';
import RegistrationVerified from '../../assets/images/registration-verified.png';
import './ApplicationForm.css';

export function ApplicationForm() {
  return (
    <div>
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
              <option value="Fis22">Fis22</option>
              <option value="S/M22">S/M22</option>
              <option value="Lygga">Lygga</option>
              <option value="com .Meets22">com .Meets22</option>
              <option value="Startups">Startups</option>
            </select>
          </div>
          <input type="number" name="number" placeholder="Idade" />
          <Button />
        </label>
      </form>

      <form className="form-completed" action="POST">
        <h1>Cadastro concluído!</h1>
        <img className="registration-verified" src={RegistrationVerified} alt="RegistrationVerified" />
      </form>
    </div>
  )
}

