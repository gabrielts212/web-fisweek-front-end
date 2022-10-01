import React from 'react';
import axios from 'axios';

import { Button } from '../button/Button';
import { TextInput } from '../textinput/TextInput';

import RegistrationVerified from '../../assets/images/registration-verified.png';

import { withTranslation } from 'react-i18next';

import styles from './ApplicationForm.module.css';

class ApplicationForm extends React.Component { 
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
            conference: undefined,
            isValidEmail: true,
            isValidFirstName: true,
            isValidLastName: true,
            submitted: false,
        }
    }

    onButtonClick() {
        const { email, firstName, lastName, alreadyKnew, howDidYouKnow, conference, age } = this.state;
        const isValidEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
        const isValidFirstName = firstName !== undefined && firstName != "";
        const isValidLastName = lastName !== undefined && lastName != "";
        this.setState({ isValidEmail, isValidFirstName, isValidLastName });

        if (isValidEmail && isValidFirstName && isValidLastName) {
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
            })
            .catch(err => {
                console.error(err);
            });
            this.setState({ submitted: true });
        }
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
        const { age, isValidEmail, isValidFirstName, isValidLastName } = this.state;
        const { t } = this.props;
        return (
            <div>
              <label className={styles.captionTitle}>{t('form')}</label>
              <TextInput round placeholder={t("inputs.name")} error={!isValidFirstName} onChange={(e) => this.setState({ firstName: e.target.value})} required />
              <TextInput round placeholder={t("inputs.lastName")} error={!isValidLastName} onChange={(e) => this.setState({ lastName: e.target.value})} required />
              <TextInput round placeholder={t("email")} error={!isValidEmail} onChange={(e) => this.setState({ email: e.target.value})} required />
              <div>
                <select className={styles.formControl} onChange={e => this.setState({ alreadyKnew: e.target.value })}>
                  <option>{t("inputs.initiative")}</option>
                  <option value="1">{t("inputs.yes")}</option>
                  <option value="0">{t("inputs.not")}</option>
                </select>
              </div>
              <div>
                <select className={styles.formControl} onChange={e => this.setState({ howDidYouKnow: e.target.value })}>
                  <option>{t("inputs.HowDidYouHearAboutTheEvent?")}</option>
                  <option value="Social Networks">{t("inputs.SocialNetworks")}</option>
                  <option value="Recommendation">{t("inputs.Recommendation")}</option>
                  <option value="Invitation by Fis">{t("inputs.InvitationByFis")}</option>
                  <option value="E-mail marketing">{t("inputs.E-mailMarketing")}</option>
                  <option value="Magazines and Portals">{t("inputs.MagazinesAndPortals")}</option>
                  <option value="Others">{t("inputs.Others")}</option>
                </select>
              </div>
              <div>
                <select className={styles.formControl} onChange={e => this.setState({ conference: e.target.value })}>
                  <option>{t("inputs.WhichEventWouldYouLikeToAttend")}</option>
                  <option value="Fis22">#FIS22</option>
                  <option value="S/M22">#SYM22</option>
                  <option value="Lygga">#LYGGA22</option>
                  <option value="com .Meets22">#COMMEETS22</option>
                </select>
              </div>
              <TextInput round name="idade" value={age} placeholder={t("inputs.age")} maxLength={2} number onChange={(e) => this.setState({ age: isNaN(e.target.value) ? undefined : e.target.value})} />
              <Button text={t("register")} onClick={this.onButtonClick.bind(this)} alt />
            </div>
        );
    }

    renderResult() {
        const { t } = this.props;
        return (
            <div className={styles.formCompleted}>
              <h1>{t("RegistrationCompleted!")}</h1>
              <img src={RegistrationVerified} alt="RegistrationVerified" />
            </div>
        );
    }
}

export default withTranslation()(ApplicationForm)
