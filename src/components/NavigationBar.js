import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Diki Apriansyah</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Biografi</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
