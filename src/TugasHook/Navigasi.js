import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigasi = () => {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Berita Bisnis Indonesia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigasi;
