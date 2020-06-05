import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import dataSource from "./data/dataSource.json";
import { parseFiles } from "./tools/dataTools";

const data = parseFiles(dataSource);

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
