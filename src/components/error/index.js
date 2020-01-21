import React from "react";
import { Container } from "react-bootstrap";
const Error = props => {
  const { error } = props;

  return (
    <Container>
      <div className="error">{error}</div>
    </Container>
  );
};

export default Error;
