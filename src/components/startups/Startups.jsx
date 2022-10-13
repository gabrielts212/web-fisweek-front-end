import "./Startups.css";
// import { Link } from "react-scroll";
import StartupsImage from "../../assets/images/startups/StartupsImage.png";
import BEEHIVE from "../../assets/images/startups/BEEHIVE.png";
import { useState } from "react";
import Modal from "react-modal";

import Eclipse from "../../assets/images/startups/eclipse.png";
Modal.setAppElement("#root");

export function Startups() {
  // function Startups() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Startups" id="events3">
      <div className="StartupsImage" id="Startups">
        <header>
          <h1>Startups</h1>
          <img src={Eclipse} alt="Circulo vermelho" />
        </header>
      </div>

      <img className="startupsImage" src={StartupsImage} alt="image startups" />

      <div className="eventBeehive">
        <div className="smBeehive">
          <img src={BEEHIVE} alt="BEEHIVE" />
          <p title="Deslize para Baixo">
            Nossa grande contribuição para a Inovação na Saúde. Um evento feito
            para ser destaque no setor, com grandes lideranças, trocas de
            experiências e muito conteúdo e interação. 100% digital e gratuito e
            com a cara da #IniciativaFIS. Nossa grande contribuição para a
            Inovação na Saúde. Um evento feito para ser destaque no setor, com
            grandes ssa grande contribuição para a Inovação na Saúde. Um evento
            feito para ser destaque no setor, com grandes lideranças, trocas de
            experiências e muito conteúdo e interação. 100% digital e gratuito e
            com a cara da #IniciativaFIS.
          </p>
          <button className="btn-first" onClick={openModal}>
            Cadastrar
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <h1>Formulario aqui</h1>
            <button className="buttonModal" onClick={closeModal}>
              OK
            </button>
          </Modal>
        </div>
        <span> O evento será online e presencial </span>
      </div>
    </div>
  );
}
