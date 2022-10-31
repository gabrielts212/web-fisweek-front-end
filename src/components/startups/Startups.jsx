import "./Startups.css";

import StartupsImage from "../../assets/images/startups/startupsImage.png";
import StartupsImageSmall from "../../assets/images/startups/startupsImageSmall.png";
import BEEHIVE from "../../assets/images/startups/BEEHIVE.png";
import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import { useTranslation } from 'react-i18next';

import Eclipse from "../../assets/images/startups/eclipse.png";
Modal.setAppElement("#root");

export function Startups() {
  const { t } = useTranslation();

  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function createUser(data) {
    console.log("ok", data);
  }

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
                  {...register("Startup", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="name"
                  placeholder={t("startups.representantName")}
                  {...register("Representante", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="Email"
                  name="Email"
                  placeholder={t("startups.emai")}
                  {...register("Email", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="number"
                  name="name"
                  placeholder={t("startups.phoneNumber")}
                  {...register("Telefone", {
                    required: true,
                  })}
                  required
                />
                <div>
                  <select className="formSelect">
                    <option>{t("startups.selectACountry")}</option>
                    <option value="Brasil">{t("startups.brazil")}</option>
                    <option value="Espanha">{t("startups.spain")}</option>
                    <option value="Estados Unidos">{t("startups.unitedStates")}</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder={t("startups.city")}
                  {...register("cidade", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="name"
                  placeholder={t("startups.url")}
                  {...register("Site", {
                    required: true,
                  })}
                  required
                />
                <textarea
                  className="textArea"
                  placeholder={t("startups.textarea")}
                  id=""
                  name=""
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
        </div>
        <span>{t("startups.eventOnline")}</span>
      </div>
    </div>
  );
}

