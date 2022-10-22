import React from "react";
import { Button, Form, InputGroup, Container, Col } from "react-bootstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <Container>
        <Col>
          <InputGroup className="mb-4 mt-5" size="lg">
            <Form.Control placeholder="Cari berita..." onChange={this.props.handleChange} />
            <Button onClick={this.props.onClickDitekan}>Telusuri</Button>
          </InputGroup>
        </Col>
      </Container>
    );
  }
}

export default SearchBar;
