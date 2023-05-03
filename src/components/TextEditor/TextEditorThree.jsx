import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditorThree() {
    const [text, setText] = useState('');

    function handleChange(value) {
        setText(value);
    }

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };
  return (
      <ReactQuill value={text} onChange={handleChange} modules={modules}/>
  )
}

export default TextEditorThree
