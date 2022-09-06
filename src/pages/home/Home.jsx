import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

import { ApplicationForm } from '../../components/applicationform/ApplicationForm';

export function Home() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}><ApplicationForm /></Col>
            </Row>
            <Row></Row>
        </Container>
    );
}