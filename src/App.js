import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {getFiles} from "./tools/dataTools"
import FileList from "./components/FileList"
import FilePreview from "./components/FilePreview"

const App = ({ data }) => {
  const [preview, setPreview] = useState(null)
  const [filter, setFilter] = useState(null)
  const files = getFiles(data, filter)

  return (
    <Container fluid className="h-100 py-4">
      <Row className="h-100">
        <Col xs={12} md={5} lg={4} xl={3} className="h-100 d-flex flex-column">
          <FileList
            files={files}
            setFilter={setFilter}
            setPreview={setPreview}
          />
        </Col>
        <Col className="h-100 d-flex flex-column justify-content-center">
          <FilePreview data={data} preview={preview} setPreview={setPreview} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
