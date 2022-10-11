import { Container, Row, Col, Card } from "react-bootstrap";

const MyBiodata = () => {
  return (
    <div>
      <Container className="bio">
        <Row>
          <h1>My Bio</h1>
          <p>Haloo selamat datang, ini merupakan bagian dari tugas React JS tentang pengenalan styling berikut sedikit mengenai biodata saya, semoga kita semua sehat selalu.</p>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Pendidikan Formal</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Hobby</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Novel</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyBiodata;
