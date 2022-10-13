import React from 'react';
import axios from 'axios';

import { Button } from '../button/Button';
import { TextInput } from '../textinput/TextInput';

import RegistrationVerified from '../../assets/images/registration-verified.png';

import { withTranslation } from 'react-i18next';
import { CaretDown } from "phosphor-react";

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
                  <option className={styles.options}>{t("inputs.initiative")}</option>
                  <option value="1" className={styles.optionsValue}>{t("inputs.yes")}</option>
                  <option value="0" className={styles.optionsValue}>{t("inputs.not")}</option>
                </select>
                <CaretDown className={styles.arrowDownOne} size={22} />
              </div>
              <div>
                <select className={styles.formControl} onChange={e => this.setState({ howDidYouKnow: e.target.value })}>
                  <option className={styles.options}>{t("inputs.HowDidYouHearAboutTheEvent?")}</option>
                  <option value="Social Networks" className={styles.optionsValue}>{t("inputs.SocialNetworks")}</option>
                  <option value="Recommendation" className={styles.optionsValue}>{t("inputs.Recommendation")}</option>
                  <option value="Invitation by Fis" className={styles.optionsValue}>{t("inputs.InvitationByFis")}</option>
                  <option value="E-mail marketing" className={styles.optionsValue}>{t("inputs.E-mailMarketing")}</option>
                  <option value="Magazines and Portals" className={styles.optionsValue}>{t("inputs.MagazinesAndPortals")}</option>
                  <option value="Others" className={styles.optionsValue}>{t("inputs.Others")}</option>
                </select>
                <CaretDown className={styles.arrowDownTwo} size={22} />
              </div>
              {/* <div>
                <select className={styles.formControl} onChange={e => this.setState({ conference: e.target.value })}>
                  <option className={styles.options}>{t("inputs.WhichEventWouldYouLikeToAttend")}</option>
                  <option value="Fis22" className={styles.optionsValue}>#FIS22</option>
                  <option value="S/M22" className={styles.optionsValue}>#SYM22</option>
                  <option value="Lygga" className={styles.optionsValue}>#LYGGA22</option>
                  <option value="com .Meets22" className={styles.optionsValue}>#COMMEETS22</option>
                  <option value="all" className={styles.optionsValue}>Todos</option>
                </select>
                <CaretDown className={styles.arrowDownThree} size={22} />
              </div> */}

              <TextInput round placeholder={t("inputs.WhichEventWouldYouLikeToAttend")} onChange={(e) => this.setState({ conference: e.target.value})} />
              <div className={styles.checkboxGroup}>
                <div>
                  <input className={styles.inputFis} type="checkbox" round onChange={(e) => this.setState({ conference: e.target.value})} /> #FIS22
                </div>

                <div>
                  <input className={styles.inputLygga} type="checkbox" round onChange={(e) => this.setState({ conference: e.target.value})} /> #LYGGA22
                </div>

                <div>
                  <input className={styles.inputSym} type="checkbox" round onChange={(e) => this.setState({ conference: e.target.value})} /> #SYM22
                </div>

                <div>
                  <input className={styles.inputCommeets} type="checkbox" round onChange={(e) => this.setState({ conference: e.target.value})} /> #COMMEETS22
                </div>

                <div>
                  <input className={styles.inputAll} type="checkbox" round onChange={(e) => this.setState({ conference: e.target.value})} /> Todos
                </div>
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
              <h1>{t("inputs.RegistrationCompleted!")}</h1>
              <img src={RegistrationVerified} alt="RegistrationVerified" />
            </div>
        );
    }
}

export default withTranslation()(ApplicationForm)
