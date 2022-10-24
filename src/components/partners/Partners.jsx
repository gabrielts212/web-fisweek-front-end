import React from "react";
import "./Partners.css";

import Eclipse2 from "../../assets/images/Partners/eclipse2.png";
// import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";

import { Diamond } from "../diamond/Diamond";
import { Gold } from "../gold/Gold";
import { Apoio } from "../apoio/Apoio";

export function Partners() {
  return (
    <div className="Partners">
      <div className="PartnersHeader">
        <header>
          <h1>Parceiros</h1>
          <img src={Eclipse2} alt="Circulo" />
        </header>

        <Diamond />
        <Gold />
        <Apoio />
      </div>
    </div>
  );
}
