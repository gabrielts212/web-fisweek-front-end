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

import './Home.css';

export function Home() {
    return (
        <Container>
            <Row>
               <Header />
            </Row>
            <Row>
                <Col xs={12} md={8}><RegistrationInfo /></Col>
                <Col xs={12} md={4}><ApplicationForm /></Col>
            </Row>
            <Row>
                <ConferenceBar />
            </Row>
            <Row>
                <Col xs={12} md={12}><Leaders/></Col>
            </Row>
            <Row>
                {/* <Timer /> */}
            </Row>
            <Row>
                {/* <Schedule /> */}
            </Row>
            <Row>
                {/* <Testimonials /> */}
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}


