import "./Startups.css";
import { Link } from "react-scroll";
import StartupsImage from "../../assets/images/startups/StartupsImage.png";
import BEEHIVE from "../../assets/images/startups/BEEHIVE.png";
import { useState } from "react";
import { Modal } from "bootstrap";
// import Modal from "react-modal";

// Modal.setAppElement ("root");

export function Startups() {
// const [openModal, setIsOpen] = useState(false)

function  openModal(){
  setIsopen(true);
}
function  openModal(){
  setIsopen(false);
}

  return (
    <div className="Startups" id="events3">

   <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>FORM DO MODAL AQUI</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>

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
          <a href="#">
            <Link>
              <button className="btn-first">Cadastrar</button>
            </Link>
          </a>
        </div>
          <span> O evento será online e presencial </span>
      </div>
    </div>
  );
}
