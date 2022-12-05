import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Todo } from "./Todo.jsx";

export const TodosList = ({todos}) => {
  if (todos.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Row className>
        {todos.map((todo) => (
          <Col md="4">
            <Todo todo={todo}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
