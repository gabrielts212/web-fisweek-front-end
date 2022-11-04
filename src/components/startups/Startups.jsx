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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            
            <form className="formStartups" onSubmit={handleSubmit(createUser)}>
              <label className="captionTitle">
                <input
                  type="text"
                  name="name"
                  placeholder={t("startups.startupName")}
                  {...register("name", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="nameR"
                  placeholder={t("startups.representantName")}
                  {...register("nameR", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="Email"
                  name="email"
                  placeholder={t("startups.emai")}
                  {...register("email", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="number"
                  name="telephone"
                  placeholder={t("startups.phoneNumber")}
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
                  {...register("city", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="site"
                  placeholder={t("startups.url")}
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

