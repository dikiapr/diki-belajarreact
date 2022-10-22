import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Kartu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644&q=mobil")
      .then((response) => response.json())
      .then((json) => this.setState({ items: json.articles }))
      .catch((e) => console.log(e));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="m-3">
        <Container>
          <Row>
            {items.map((data) => {
              return (
                <Col md={4} className="mb-3" key={data.publishedAt}>
                  <Card className="shadow">
                    <Card.Img variant="top" src={data.urlToImage} />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {data.author} - {data.publishedAt}
                      </Card.Subtitle>
                      <Card.Text>{data.description}</Card.Text>
                      <Button variant="primary" href={data.url}>
                        Go somewhere
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Kartu;
