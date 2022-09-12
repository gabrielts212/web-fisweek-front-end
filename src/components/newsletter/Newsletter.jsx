import React from 'react';
import axios from 'axios';

import { Button } from '../button/Button';
import { TextInput } from '../textinput/TextInput';

import checked from '../../assets/images/newsletter/checked.png';
import email from '../../assets/images/icons/email.png';
import facebook from '../../assets/images/newsletter/facebook.png';
import instagram from '../../assets/images/newsletter/instagram.png';
import linkedIn from '../../assets/images/newsletter/linked-in.png';
import main from '../../assets/images/newsletter/main.png';
import shape1 from '../../assets/images/newsletter/shape1.png';
import shape2 from '../../assets/images/newsletter/shape2.png';
import shape3 from '../../assets/images/newsletter/shape3.png';
import spotify from '../../assets/images/newsletter/spotify.png';
import youtube from '../../assets/images/newsletter/youtube.png';
import telegram from '../../assets/images/icons/telegram.png';
import tikTok from '../../assets/images/newsletter/tik-tok.png';
import twitter from '../../assets/images/newsletter/twitter.png';
import user from '../../assets/images/icons/user.png';

import './Newsletter.css';

export class Newsletter extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            email: undefined,
            submitted: false
        }
    }

    onButtonClick() {
        const { email, name } = this.state;
        axios.put('/server/fisweek/pre-registrar', { nome: name, email: email })
        .then(res => {
            console.log(res);
            this.setState({ submitted: true });
        })
        .catch(err => {
            console.error(err);
            this.setState({ submitted: true });
        });

    } 

    render() {
        const { submitted } = this.state;
        return (
            <div className="newsletter">
                <img className="main" src={main} alt="Aperto de mãos de um robô com um humano" />
                <h2>A MAIOR EXPERIÊNCIA EM GERAÇÃO DE CONTEÚDO DO SETOR DA SAÚDE NA AMÉRICA LATINA VOLTOU!</h2>
                <img className="shape1" src={shape1} alt="Forma Geomêtrica" />
                <img className="shape2" src={shape2} alt="Forma Geomêtrica" />
                <img className="shape3" src={shape3} alt="Forma Geomêtrica" />
                <div className="content">
                    {submitted ? this.renderResult() : this.renderForm()}
                </div>
            </div>
        );
    }

    renderForm() {
        return (
            <div>
                <h3>Fique por dentro</h3>
                <TextInput name="name" placeholder="Nome" icon={user} onChange={(e) => this.setState({ name: e.target.value})} />
                <TextInput name="email" placeholder="E-mail" icon={email} onChange={(e) => this.setState({ email: e.target.value})} />
                <Button text="CADASTRE-SE" onClick={this.onButtonClick.bind(this)} />
            </div>
        );
    }

    renderResult() {
        return (
            <div>
                <h3><img src={checked} className="checked" /><br/>Obrigado</h3>
                <h4>Se conecte com a gente</h4>
                <div className="social">
                    <img src={youtube} />
                    <img src={spotify} />
                    <img src={instagram} />
                    <img src={linkedIn} />
                    <img src={twitter} />
                    <img src={tikTok} />
                    <img src={facebook} />
                </div>
                <Button icon={telegram} text="INSCREVA-SE NO TELEGRAM" />
            </div>
        );
    }
}