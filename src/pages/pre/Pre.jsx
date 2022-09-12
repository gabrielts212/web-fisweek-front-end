import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ConferenceBar } from '../../components/conferencebar/ConferenceBar';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { SaveTheDate } from '../../components/savethedate/SaveTheDate';

import './Pre.css';

export function Pre() {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6}><SaveTheDate /></Col>
                <Col xs={12} lg={6}><Newsletter /></Col>
            </Row>
            <Row>
                <ConferenceBar />
            </Row>
        </Container>
    );
}
