import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Footer } from '../../components/footer/Footer';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { SaveTheDate } from '../../components/savethedate/SaveTheDate';

import './Pre.css';

export function Pre() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}><SaveTheDate /></Col>
                <Col xs={12} md={6}><Newsletter /></Col>
            </Row>
            <Row>
                <Footer />
                <a className="home" href="/home">Home</a>
            </Row>
        </Container>
    );
}
