import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from '../../components/header/Header';
import { AllTheLeaders } from '../../components/alltheleaders/AllTheLeaders';
import { Footer } from '../../components/footer/Footer';

import './LinkHome.css';

export function LinkHome() {
    return (
        <Container>
            <Row>
               <Header />
            </Row>
            <Row>
              <Col xs={12} md={12}><AllTheLeaders /></Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}
