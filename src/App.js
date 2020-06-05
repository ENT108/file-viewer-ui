import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import dataSource from "./dataSource.json";
import { parseFiles } from "./parseFiles";

function App() {
  const [preview, setPreview] = useState(null);
  const [filter, setFilter] = useState(null);
  const data = parseFiles(dataSource);
  const files = Array.from(parseFiles(dataSource).keys())
    .map((file) => {
      if (filter && file.toLowerCase().search(filter) > -1) return file;
      else if (!filter) return file;
      else return null;
    })
    .filter((file) => file);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} md={3}>
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            className="mb-2"
            onChange={(e) => setFilter(e.target.value)}
          />
          <ListGroup>
            {files.map((file, idx) => (
              <ListGroup.Item
                variant="dark"
                onClick={() => setPreview(file)}
                action
                key={idx}
              >
                {file}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        {preview && (
          <Col>
            <div className="rounded">
              {/* <div onClick={() => setFilter(null)}>
              <span role="img">❌</span>
            </div> */}
              <code className="output">{data.get(preview)}</code>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default App;
