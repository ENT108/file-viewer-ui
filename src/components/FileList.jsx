import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { SentencesEnum } from "../constants";

const FileList = ({ files, filter, setFilter, setPreview }) => (
  <>
    <InputGroup className="mb-2" size="sm">
      <FormControl
        placeholder={SentencesEnum.search}
        aria-label="Search"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </InputGroup>
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
  </>
);

export default FileList;
