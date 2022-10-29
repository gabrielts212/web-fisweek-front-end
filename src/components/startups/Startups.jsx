import "./Startups.css";

import StartupsImage from "../../assets/images/startups/startupsImage.png";
import StartupsImageSmall from "../../assets/images/startups/startupsImageSmall.png";
import BEEHIVE from "../../assets/images/startups/BEEHIVE.png";
import { useState } from "react";
import Modal from "react-modal";

import { useForm } from "react-hook-form";

import Eclipse from "../../assets/images/startups/eclipse.png";
Modal.setAppElement("#root");

export function Startups() {
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
          <button onClick={openModal}>Cadastrar</button>
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
                  placeholder="Nome da Startup"
                  {...register("Startup", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Nome do Representante"
                  {...register("Representante", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="Email"
                  name="Email"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="number"
                  name="name"
                  placeholder="Telefone de Contato"
                  {...register("Telefone", {
                    required: true,
                  })}
                  required
                />
                <div>
                  <select className="formSelect">
                    <option>Selecione um País</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Espanha">Espanha</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Cidade"
                  {...register("cidade", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Site/URL"
                  {...register("Site", {
                    required: true,
                  })}
                  required
                />
                <textarea
                  className="textArea"
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
                <button className="buttonDeck">

                  Faça o upload do seu Deck
                </button>

                <button className="buttonModal" type="submit">
                  OK
                </button>
              </label>
            </form>
          </Modal>
        </div>
        {/* <span> O evento será online e presencial </span> */}
      </div>
    </div>
  );
}

