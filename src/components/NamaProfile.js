import { Container, Row, Col, Button } from "react-bootstrap";

const NamaProfile = () => {
  return (
    <div>
      <Container fluid className="intro">
        <Row>
          <Col>
            <p>Student in Eduwork</p>
            <h1>Diki Apriansyah</h1>
            <Button variant="success" className="buttonSatu">
              Linkedin Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NamaProfile;
