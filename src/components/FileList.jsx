import React from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { SentencesEnum } from "../constants";

const FileList = ({ files, setFilter, setPreview }) => (
  <>
    <InputGroup size="sm mb-2">
      <FormControl
        placeholder={SentencesEnum.search}
        aria-label="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
    </InputGroup>
    <ListGroup className="overflow-auto">
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
  </>
);

export default FileList;
