import { Row } from "react-bootstrap";
import { LeaderData } from "../leaderdata/LeaderData";

import { useTranslation } from 'react-i18next';

import "./Leaders.css";

export function Leaders() {
  const { t } = useTranslation();

  return (
    <div id="leaders">
      <LeaderData input={""} showAll={false} />
      <Row>
        <a href="/fisweek22/#/leaderspage" target="_blank">
          <button className="showLeaders">{t("leaders.seeAllLeaders")}</button>
        </a>
      </Row>
    </div>
  );
}
