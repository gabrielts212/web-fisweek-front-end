import "./Startups.css";

import StartupsImage from "../../assets/images/startups/StartupsImage.png";
import BEEHIVE from "../../assets/images/startups/BEEHIVE.png";
import { useState } from "react";
import Modal from "react-modal";

import Eclipse from "../../assets/images/startups/eclipse.png";
Modal.setAppElement("#root");

export function Startups() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Startups">
        <img className="startupsImage" src={StartupsImage} />
        <header>
          <h1>Startups</h1>
          <img src={Eclipse} alt="Circulo vermelho" />
        </header>
    
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

            <form className="formStartups" action="POST">
              <label className="caption-title">
                <input type="text" name="name" placeholder="Nome da Startup" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome do Representante"
                />
                <input type="text" name="name" placeholder="Email" />
                <input
                  type="text"
                  name="name"
                  placeholder="Telefone de Contato"
                />
                <div>
                  <select className="form-control">
                    <option>Selecione um País</option>
                    <option value="">Brasil</option>
                    <option value="">Espanha</option>
                    <option value="">Estados Unidos</option>  
                  </select>
                </div>

                <input type="text" name="name" placeholder="Cidade" />
                <input type="text" name="name" placeholder="Site/URL" />
                <textarea
                  id=""
                  name=""
                  rows="8"
                  cols="35"
                ></textarea>

                <button className="buttonDeck" type="submit">Faça o upload do seu Deck</button>

                <button className="buttonModal" onClick={closeModal} type="submit">
                  OK
                </button>
              </label>
            </form>

          </Modal>
        </div>
        <span> O evento será online e presencial </span>
      </div>
    </div>
  );
}
