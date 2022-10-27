import React from "react";
import "./BroadcastPage.css";
import { useState } from "react";
import Modal from "react-modal";

import BroadcastImage from "../../assets/images/broadcast/broadcastImage.png";
import BroadcastImage2 from "../../assets/images/broadcast/broadcastImage2.png";
import BroadcastImage3 from "../../assets/images/broadcast/broadcastImage3.png";
import BroadcastImage4 from "../../assets/images/broadcast/broadcastImage4.png";


export function BroadcastPage() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div className="teste">
      <div className="Broadcast">
        <header>
          <h1>Assista Agora!</h1>
          <p>Selecione o evento</p>
        </header>
        
<div className="eventos">

        <img onClick={openModal} src={BroadcastImage}  alt="" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
            >
        <iframe
        // className="iframeVideo"
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/5MqUYpfN45o"
        title="Conheça a Iniciativa FIS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        scolling="no"
        ></iframe>
      </Modal>



      <img onClick={openModal} src={BroadcastImage2}  alt="" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
            >
        <iframe
        // className="iframeVideo"
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/FzihvtVLOxY"
        title="Conheça a Iniciativa FIS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        scolling="no"
      ></iframe>
      </Modal>



      <img onClick={openModal} src={BroadcastImage3}  alt="" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
            >
        <iframe
        // className="iframeVideo"
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/5MqUYpfN45o"
        title="Conheça a Iniciativa FIS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        scolling="no"
        ></iframe>
      </Modal>



      <img onClick={openModal} src={BroadcastImage4}  alt="" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal1"
            overlayClassName="modal-overlay1"
            className="modal-content1"
            >
        <iframe
        // className="iframeVideo"
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/5MqUYpfN45o"
        title="Conheça a Iniciativa FIS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        scolling="no"
        ></iframe>
      </Modal>


        </div>
      </div>
    </div>
  );
}
