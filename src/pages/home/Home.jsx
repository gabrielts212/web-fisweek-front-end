import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ApplicationForm } from '../../components/applicationform/ApplicationForm';
import { RegistrationInfo } from '../../components/registrationInfo/RegistrationInfo';
import { Footer } from '../../components/footer/Footer';
import { ConferenceBar } from '../../components/conferencebar/ConferenceBar';
import { Leaders } from '../../components/leaders/Leaders';
import { Programming } from '../../components/programming/Programming';

import './Home.css';

export function Home() {
    return (
        <Container>
            <Row>
                {/* <Col xs={12} md={8}><RegistrationInfo /></Col>
                <Col xs={12} md={4}><ApplicationForm /></Col> */}
            </Row>
            <Row>
                {/* <ConferenceBar /> */}
            </Row>
            <Row>
                {/* <Leaders/> */}
            </Row>
            <Row>
                {/* <Programming /> */}
            </Row>
            <Row>
                {/* <Footer /> */}
            </Row>
        </Container>
    );
}

