import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import dataSource from "./dataSource.json";
import { parseFiles } from "./parseFiles";

function App() {
  const [preview, setPreview] = useState(null);
  const data = parseFiles(dataSource);
  const files = Array.from(parseFiles(dataSource).keys());

  return (
    <div className="App">
      <Container fluid className="mt-5">
        <Row>
          <Col xs={12} md={2}>
            <ListGroup>
              {files.map((file, idx) => (
                <ListGroup.Item
                  onClick={() => setPreview(file)}
                  action
                  key={idx}
                >
                  {file}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col xs={12} md={10} className="border rounded">
            <code>{data.get(preview)}</code>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
