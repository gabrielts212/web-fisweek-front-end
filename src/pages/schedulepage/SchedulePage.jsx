import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from '../../components/header/Header';
import { AllTheSchedule } from '../../components/alltheschedule/AllTheSchedule';
import { Footer } from '../../components/footer/Footer';

import './SchedulePage.css';

export function SchedulePage() {
    return (
        <Container>
            <Row>
               <Header />
            </Row>
            <Row>
              <Col xs={12} md={12}><AllTheSchedule showPanels={true} searchPanelHandler={""} /></Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}
