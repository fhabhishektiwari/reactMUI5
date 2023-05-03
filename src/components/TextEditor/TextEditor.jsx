import React, { useState } from "react";
import { Editor, Table, TableRow, TableColumn } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    const toolbar = {
        options: [
            "inline",
            "blockType",
            "fontSize", // include font size option
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            
            "remove",
            "history",
            
        ],
        fontSize: {
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96], // available font sizes
        },
    };

    return (
        <div>
            <Editor
                toolbar={toolbar}
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={onEditorStateChange}
            />
            {/* {<textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                className="text-area"
            ></textarea>} */}
        </div>
    );
};

export default TextEditor;





