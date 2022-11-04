import "./Startups.css";

import StartupsImage from "../../assets/images/startups/startupsImage.png";
import StartupsImageSmall from "../../assets/images/startups/startupsImageSmall.png";
import BEEHIVE from "../../assets/images/startups/beehive.png";
import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useTranslation } from 'react-i18next';

import Eclipse from "../../assets/images/startups/eclipse.png";
Modal.setAppElement("#root");

export function Startups() {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = useState(false)
  
  const { register, erros, reset, handleSubmit} = useForm(false);
  const registerHandler = (data) => {
    console.log(data);
    reset();
   }
  const createUser = data => console.log("Enviado", data)
  
  console.log(createUser)

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Startups" id="startups">
      <img className="startupsImage" src={StartupsImage} />
      <img className="startupsImageSmall" src={StartupsImageSmall} />
      <header>
        <h1>Startups</h1>
        <img src={Eclipse} alt="Circulo" />
      </header>

      <div className="eventBeehive">
        <div className="smBeehive">
          <img src={BEEHIVE} alt="BEEHIVE" />
          <p title="Deslize para Baixo">{t("startups.text")}</p>
          <button onClick={openModal}>{t("startups.register")}</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            
            <form className="formStartups" onSubmit={handleSubmit (registerHandler)}>
              <label className="captionTitle">
                <input
                  type="text"
                  name="name"
                  placeholder={t("startups.startupName")}
                  onChange={(e) => setUserName(e.target.value)}
                  ref={register}
                  {...register("name", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="representant"
                  placeholder={t("startups.representantName")}
                  onChange={(e) => setUserName(e.target.value)}
                  ref={register}
                  {...register("representant", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="Email"
                  name="email"
                  placeholder={t("startups.emai")}
                  onChange={(e) => setUserName(e.target.value)}
                  ref={register}
                  {...register("email", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="number"
                  name="telephone"
                  placeholder={t("startups.phoneNumber")}
                  onChange={(e) => setUserName(e.target.value)}
                  ref={register}
                  {...register("telephone", {
                    required: true,
                  })}
                  required
                />
                <div>
                  <select className="formSelect">
                    <option>{t("startups.selectACountry")}</option>
                    <option>{t("startups.brazil")}</option>
                    <option>{t("startups.spain")}</option>
                    <option>{t("startups.unitedStates")}</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder={t("startups.city")}
                  onChange={(e) => setUserName(e.target.value)}
                  ref={register}
                  {...register("city", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="site"
                  placeholder={t("startups.url")}
                  onChange={(e) => setUserName(e.target.value)}
                  ref={register}
                  {...register("site", {
                    required: true,
                  })}
                  required
                />
                <textarea
                  className="textArea"
                  placeholder={t("startups.textarea")}
                  id=""
                  name="content"
                  {...register("content")}
                  rows="5"
                  cols="28"
                ></textarea>

              <label htmlFor="deck" className="custom-upload" >
               
              </label>
              <input
                type="file"
                id="deck"
                name="deck"
                ref={handleSubmit}
                onChange={(e) => setFile(e.target.value)}
                accept="application/pdf"
              /> 
              <button className="buttonDeck">{t("startups.upload")}</button>

              <button className="buttonModal" type="submit">{t("startups.buttonOk")}</button>
              </label>
            </form>
          </Modal>
          <span className="spanOnline">{t("startups.eventOnline")}</span>
        </div>
      </div>
    </div>
  );
}

