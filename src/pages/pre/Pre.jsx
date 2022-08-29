import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { Footer } from '../../components/footer/Footer';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { SaveTheDate } from '../../components/savethedate/SaveTheDate';

import './Pre.css';

export function Pre() {
    return (
        <Container>
            <Row>
                <Col md={6}><SaveTheDate /></Col>
                <Col md={6}><Newsletter /></Col>
            </Row>
            <Row>
                <Footer />
            </Row>
            <Row>
                <Link to="/home">Home</Link>
            </Row>
        </Container>
    );
}
