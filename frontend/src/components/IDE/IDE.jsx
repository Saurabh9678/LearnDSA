import React from "react";
// import Editor from "@monaco-editor/react";
import "./IDE.css";
import Iframe from "react-iframe";

export default function IDE() {
  return (
    <div>
      <div>
        <Iframe
          url="http://localhost:5000/"
          width="1000px"
          height="900px"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
}
