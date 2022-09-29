import React from 'react';
import axios from 'axios';

import { FacebookLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import { SpotifyLogo } from "phosphor-react";
import { TelegramLogo } from "phosphor-react";
import { TiktokLogo } from "phosphor-react";

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

// import { useTranslation } from 'react-i18next';
// import { LanguageSwitcher } from '../LanguageSwitcher';

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
        // axios.put('http://localhost:4000/pre-registrar', { nome: name, email: email })
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
        const { t } = useTranslation();

        const { submitted } = this.state;
        return (
            <div className="newsletter">
                <LanguageSwitcher />
                <img className="main" src={main} alt="Aperto de mãos de um robô com um humano" />
                <h2>{t("welcome")}</h2>
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
        const { t } = useTranslation();

        return (
            <div>
                <h3>{t("knowMore")}</h3>
                <TextInput name="name" placeholder={t("name")} icon={user} onChange={(e) => this.setState({ name: e.target.value})} />
                <TextInput name="email" placeholder={t("email")} icon={email} onChange={(e) => this.setState({ email: e.target.value})} />
                <Button text={t("register")} onClick={this.onButtonClick.bind(this)} />
            </div>
        );
    }

    renderResult() {
        const { t } = useTranslation();

        return (
            <div>
                <h3><img src={checked} className="checked" /><br/>{t("feedback")}</h3>
                <h4>{t("invitation")}</h4>
                <div className="social">
                    <a 
                        href="https://www.youtube.com/channel/UCfhxOWElbOLDkERStLYBNsg" 
                        alt="youtube" 
                        target="_blank">
                        <img src={youtube} />
                    </a>

                    <a 
                        href="https://open.spotify.com/show/7aON0A01X0mw4dSWG6rbuc?si=c40d709dd5744e4a&nd=1" 
                        alt="spotify" 
                        target="_blank">
                        <img src={spotify} />
                    </a>

                    <a
                        href="https://www.instagram.com/iniciativafis/"
                        alt="instagram"
                        target="_blank">
                        <img src={instagram} />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/iniciativafis/"
                        alt="linkedin"
                        target="_blank">
                        <img src={linkedIn} />
                    </a>

                    <a
                        href=" https://twitter.com/iniciativafis/"
                        alt="twitter"
                        target="_blank">
                        <img src={twitter} />
                    </a>
                    
                    <a
                        href=" https://www.tiktok.com/@iniciativafis?lang=pt-BR"
                        alt="tik tok"
                        target="_blank">
                        <img src={tikTok} />
                    </a>

                    <a
                        href=" https://www.facebook.com/iniciativafis"
                        alt="facebook"
                        target="_blank">
                        <img src={facebook} />
                    </a>
                </div>
                <a href="https://t.me/iniciativafis" alt="telegram" target="_blank">
                    <Button icon={telegram} text={t("subscribeTelegram")} />
                </a>
            </div>
        );
    }
}
