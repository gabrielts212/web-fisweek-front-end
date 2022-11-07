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
          <img onClick={openModal} src={BroadcastImage} alt="" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content2"
          >
            <iframe
              className="iframeVideo1"
              width="800"
              height="600"
              src="https://www.youtube.com/embed/JmbOfugwa2A"
              title="Conheça a Iniciativa FIS"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              scolling="no"
            ></iframe>
            <iframe className="chat1"
              width="450"
              height="600"
              src="https://www.youtube.com/live_chat?v=JmbOfugwa2A&embed_domain=fis.org.br"
            ></iframe>
          </Modal>

          <img onClick={openModal2} src={BroadcastImage2} alt="" />
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content3"
          >
             <iframe
              className="iframeVideo2"
              width="800"
              height="600"
              src="https://www.youtube.com/embed/EIx61QVnkxs"
              title="Conheça a Iniciativa FIS"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              scolling="no"
            ></iframe>
            <iframe className="chat2"
              width="450"
              height="600"
              src="https://www.youtube.com/live_chat?v=EIx61QVnkxs&embed_domain=fis.org.br"
            ></iframe>
          </Modal>

          <img onClick={openModal3} src={BroadcastImage3} alt="" />
          <Modal
            isOpen={modalIsOpen3}
            onRequestClose={closeModal3}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content4"
          >
         <iframe
              className="iframeVideo3"
              width="800"
              height="600"
              src="https://www.youtube.com/embed/7cwfSth_GuU"
              title="Conheça a Iniciativa FIS"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              scolling="no"
            ></iframe>
            <iframe className="chat3"
              width="450"
              height="600"
              src="https://www.youtube.com/live_chat?v=7cwfSth_GuU&embed_domain=fis.org.br"
            ></iframe>
          </Modal>

          <img onClick={openModal4} src={BroadcastImage4} alt="" />
          <Modal
            isOpen={modalIsOpen4}
            onRequestClose={closeModal4}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content5"
          >
              <iframe
              className="iframeVideo4"
              width="800"
              height="600"
              src="https://www.youtube.com/embed/1i0d4pEyLZA"
              title="Conheça a Iniciativa FIS"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              scolling="no"
            ></iframe>
            <iframe className="chat4"
              width="450"
              height="600"
              src="https://www.youtube.com/live_chat?v=1i0d4pEyLZA&embed_domain=fis.org.br"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
}
