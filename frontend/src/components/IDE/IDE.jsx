import React from "react";
import Editor from "@monaco-editor/react";


export default function IDE() {
    return (
        <div>
            <div>
                <Editor className="Editor"
                    width="50vw"
                    theme='vs-dark'
                    height='70vh'
                    defaultLanguage='java'
                    value="//Write your code here" />
            </div>
            <div className="BtnContainer">
                <button className="Btn">Run Code</button>
                <button className="Btn">Submit Code</button>
            </div>
        </div>

    )

};