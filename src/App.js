import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dataSource from "./dataSource.json";
import { parseFiles, getFiles } from "./dataTools";
import FileList from "./components/FileList";
import FilePreview from "./components/FilePreview";

const data = parseFiles(dataSource);

function App() {
  const [preview, setPreview] = useState(null);
  const [filter, setFilter] = useState(null);
  const files = getFiles(data, filter);

  return (
    <Container fluid className="h-100 py-4">
      <Row className="h-100">
        <Col xs={12} md={3} className="h-100">
          <FileList
            files={files}
            filter={filter}
            setFilter={setFilter}
            setPreview={setPreview}
          />
        </Col>
        <Col className="h-100 d-flex flex-column justify-content-center">
          <FilePreview data={data} preview={preview} setPreview={setPreview} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
