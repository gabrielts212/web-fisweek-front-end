import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Registratiominfo } from '../../components/registrationinfo/Registratiominfo';

import './Home.css';

export function Home() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}><ApplicationForm /></Col>
                <Col xs={12} md={8}><RegistrationInfo /></Col>
            </Row>
            <Row></Row>
        </Container>
    );
}