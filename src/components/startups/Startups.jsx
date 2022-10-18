import "./Startups.css";

import StartupsImage from "../../assets/images/startups/StartupsImage.png";
import StartupsImageSmall from "../../assets/images/startups/StartupsImageSmall.png";
import BEEHIVE from "../../assets/images/startups/BEEHIVE.png";
import { useState } from "react";
import Modal from "react-modal";

// import { useForm } from 'react-hook-form';

import Eclipse from "../../assets/images/startups/eclipse.png";
Modal.setAppElement("#root");

export function Startups() {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const { register, handleSubmit } = useForm();
  //   const [data, setData] = useState("");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

// const ReactHookForm: Startups = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isDirty, isValid }
//   } = useForm({
//     mode: 'onChange'
//   })


  return (
    <div className="Startups">
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
          <button onClick={openModal}>
            Cadastrar
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <form className="formStartups">
              <label className="captionTitle">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome da Startup"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome do Representante"
                  required
                />
                <input type="Email" name="name" placeholder="Email" required />
                <input
                  type="number"
                  name="name"
                  placeholder="Telefone de Contato"
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

                <input type="text" name="name" placeholder="Cidade" required />
                <input
                  type="text"
                  name="name"
                  placeholder="Site/URL"
                  required
                />
                <textarea
                  className="textArea"
                  id=""
                  name=""
                  rows="5"
                  cols="30"
                ></textarea>

                <button className="buttonDeck" type="submit">
                  Faça o upload do seu Deck
                </button>

                <button
                  className="buttonModal"
                  onClick={closeModal}
                  type="submit"
                >
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


// className="eventLocation"