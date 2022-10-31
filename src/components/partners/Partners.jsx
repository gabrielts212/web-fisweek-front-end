import React from "react";
import "./Partners.css";

import { useTranslation } from 'react-i18next';

import Eclipse2 from "../../assets/images/Partners/eclipse2.png";
import { Diamond } from "../diamond/Diamond";
import { Gold } from "../gold/Gold";
import { Support } from "../support/Support";

export function Partners() {
  const { t } = useTranslation();

  return (
    <div className="Partners">
      <div className="PartnersHeader">
        <header>
          <h1>{t("partners.partners")}</h1>
          <img src={Eclipse2} alt="Circulo" />
        </header>

        <Diamond />
        <Gold />
        <Support />
      </div>
    </div>
  );
}
