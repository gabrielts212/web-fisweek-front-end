import React from "react";
import "./BroadcastPage.css";
import { useState } from "react";
import Modal from "react-modal";

import BroadcastImage from "../../assets/images/broadcast/broadcast-image.png";
import BroadcastImage2 from "../../assets/images/broadcast/broadcast-image2.png";
import BroadcastImage3 from "../../assets/images/broadcast/broadcast-image3.png";
import BroadcastImage4 from "../../assets/images/broadcast/broadcast-image4.png";


export function BroadcastPage() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
    const [modalIsOpen4, setIsOpen4] = useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

    function openModal2() {
      setIsOpen2(true);
    }
    function closeModal2() {
      setIsOpen2(false);
    }

    function openModal3() {
      setIsOpen3(true);
    }
    function closeModal3() {
      setIsOpen3(false);
    }

    function openModal4() {
      setIsOpen4(true);
    }
    function closeModal4() {
      setIsOpen4(false);
    }
   
  return (
    <div className="eventsBackground">
      <div className="Broadcast">
        <header>
          <h1>Assista Agora!</h1>
          <p>Selecione o evento</p>
        </header>
        
<div className="events">
        <img onClick={openModal} src={BroadcastImage}  alt="" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content2"
            >
        <iframe
        className="iframeVideo1"
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

      <img onClick={openModal2} src={BroadcastImage2}  alt="" />
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content3"
            >
        <iframe
        className="iframeVideo2"
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
      

      <img onClick={openModal3} src={BroadcastImage3}  alt="" />
          <Modal 
            isOpen={modalIsOpen3}
            onRequestClose={closeModal3}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content4"
            >
        <iframe 
      className="iframeVideo3"
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


      <img onClick={openModal4} src={BroadcastImage4}  alt="" />
          <Modal
            isOpen={modalIsOpen4}
            onRequestClose={closeModal4}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content5"
            >
        <iframe
       className="iframeVideo4"
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


        </div>
      </div>
    </div>
  );
}

