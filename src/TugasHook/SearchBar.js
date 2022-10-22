import React from "react";
import { Button, Form, InputGroup, Container } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <Container>
      <Form onSubmit={props.handleOnSubmit}>
        <InputGroup className="mb-4 mt-5">
          <Form.Control type="search" placeholder="Cari berita..." size="lg" value={props.searchTerm} onChange={props.handleOnChange} />
          <Button onClick={props.handleOnSubmit}>Telusuri</Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default SearchBar;
