import React from 'react';
import axios from 'axios';

import { Button } from '../button/Button';
import { TextInput } from '../textinput/TextInput';

import RegistrationVerified from '../../assets/images/registration-verified.png';

import styles from './ApplicationForm.module.css';

export class ApplicationForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            password: undefined,
            birthDate: undefined,
            company: undefined,
            country: undefined,
            gender: undefined,
            already_knew: undefined,
            language: undefined,
            browserLanguage: undefined,
            submitted: false
        }
    }

    onButtonClick() {
        const { email, firstName, lastName, alreadyKnew, howDidYouKnow, conference, age } = this.state;
        axios.put('/server/fisweek/registrar', { 
            nome: firstName, 
            sobrenome: lastName, 
            email: email, 
            ja_conhecia: alreadyKnew, 
            como_soube: howDidYouKnow,
            evento: conference,
            idade: age,
        })
        .then(res => {
            console.log(res);
            this.setState({ submitted: true });
        })
        .catch(err => {
            console.error(err);
            this.setState({ submitted: true });
        });
        this.setState({ submitted: true });
    } 

    render() {
        const { submitted } = this.state;
        return (
                <div className={submitted ? styles.applicationFormResult : styles.applicationForm}>
                    {submitted ? this.renderResult() : this.renderForm()}
                </div>
        );
    }

    renderForm() {
        return (
            <div>
              <label className={styles.captionTitle}>Faça sua inscrição</label>
              <TextInput round name="name" placeholder="Nome" onChange={(e) => this.setState({ name: e.target.value})} required />
              <TextInput round name="name" placeholder="Sobrenome" onChange={(e) => this.setState({ name: e.target.value})} required />
              <TextInput round name="email" placeholder="Email" onChange={(e) => this.setState({ name: e.target.value})} required />
              <div>
                <select className={styles.formControl}>
                  <option>Conhecia a Iniciativa?</option>
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div>

              <TextInput round name="name" placeholder="Como soube do evento?" onChange={(e) => this.setState({ name: e.target.value})} required />
              <div>
                <select className={styles.formControl}>
                  <option>Qual evento gostaria de participar?</option>
                  <option value="Fis22">Fis22</option>
                  <option value="S/M22">S/M22</option>
                  <option value="Lygga">Lygga</option>
                  <option value="com .Meets22">com .Meets22</option>
                  <option value="Startups">Startups</option>
                </select>
              </div>
              <TextInput round name="number" placeholder="Idade" onChange={(e) => this.setState({ name: e.target.value})} />
              <Button text="CADASTRE-SE" onClick={this.onButtonClick.bind(this)} alt />
            </div>
        );
    }

    renderResult() {
        return (
            <div className={styles.formCompleted}>
              <h1>Cadastro concluído!</h1>
              <img src={RegistrationVerified} alt="RegistrationVerified" />
            </div>
        );
    }
}