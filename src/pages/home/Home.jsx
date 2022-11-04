import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ApplicationForm from '../../components/applicationform/ApplicationForm';
import { RegistrationInfo } from '../../components/registrationInfo/RegistrationInfo';
import { Footer } from '../../components/footer/Footer';
import { ConferenceBar } from '../../components/conferencebar/ConferenceBar';
import { Leaders } from '../../components/leaders/Leaders';
import { Schedule } from '../../components/schedule/Schedule';
import { Timer } from '../../components/timer/Timer';
import { Header } from '../../components/header/Header';
import { Testimonials } from '../../components/testimonials/Testimonials';
import { Institutional } from '../../components/institutional/Institutional';
import { EventsFis } from '../../components/eventsfis/EventsFis';
import { Startups } from '../../components/startups/Startups';
import { Partners} from '../../components/partners/Partners';
import { Gold } from '../../components/gold/Gold';
import { Support } from '../../components/support/Support';
import { BroadcastPage} from '../../components/broadcastpage/BroadcastPage';

import './Home.css';

import { useEffect } from 'react';
import { LanguageState } from '../../Context/Context';
import { useTranslation } from 'react-i18next';

export function Home() {
    const { state } = LanguageState()

    const { i18n } = useTranslation()
    useEffect(() => {
      i18n.changeLanguage(state.language)
  
    }, [state.language])

    return (
        <Container>
            <Row>
               <Header />
            </Row>
            <Row>
                {/* <Col xs={12} md={8}><RegistrationInfo /></Col>
                <Col xs={12} md={4}><ApplicationForm /></Col> */}
            </Row>
            <Row>
                <Col xs={12} md={8}><RegistrationInfo /></Col>
                <Col xs={12} md={4}><BroadcastPage /></Col>
            </Row>
            <Row>
                <ConferenceBar />
            </Row>
                <Leaders/>
            <Row>
                <Timer />
            </Row>
            <Row>
                <Institutional />
            </Row>
            <Row>
                <EventsFis />
            </Row>
            <Row>
                <Schedule />
            </Row>
            <Row>
                {/* <Testimonials /> */}
            </Row>
            <Row>
                {/* <Startups /> */}
            </Row>
            <Row>
                <Partners/>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}


