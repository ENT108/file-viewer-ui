import React from "react";
import Button from "react-bootstrap/Button";
import {SentencesEnum} from "../constants"

const FilePreview = ({ data, preview, setPreview }) =>
  preview ? (
    <>
      <Button id="close" variant="dark" onClick={() => setPreview(null)}>
        <span id="close-text">{SentencesEnum.closeFile}</span>
      </Button>
      <code className="output rounded-bottom">
        {data.get(preview)}
      </code>
    </>
  ) : (
    <h4 className="align-self-center">{SentencesEnum.noFiles}</h4>
  );

  export default FilePreview;
