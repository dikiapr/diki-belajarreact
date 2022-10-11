const { Container, Row, Col, Form, Button } = require("react-bootstrap");

const MyContact = () => {
  return (
    <div>
      <Container className="contact">
        <Row>
          <h1 className="kontakText">Contact</h1>
          <Col className="formulir">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <Button variant="success" type="submit" className="button">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyContact;
