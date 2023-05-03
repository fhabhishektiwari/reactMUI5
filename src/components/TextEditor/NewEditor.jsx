import React from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';


const editorConfiguration = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'imageUpload', 'undo', 'redo']
};

// const editorConfiguration = [
//         { name: 'document', groups: ['mode', 'document', 'doctools'] },
//         { name: 'clipboard', groups: ['clipboard', 'undo'] },
//         { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
//         { name: 'forms', groups: ['forms'] },
//         '/',
//         { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
//         { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
//         { name: 'links', groups: ['links'] },
//         { name: 'insert', groups: ['insert'] },
//         '/',
//         { name: 'styles', groups: ['styles'] },
//         { name: 'colors', groups: ['colors'] },
//         { name: 'tools', groups: ['tools'] },
//         { name: 'others', groups: ['others'] },
//         { name: 'about', groups: ['about'] }
//     ];

const NewEditor = () => {
  return (
      <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
              // You can store the "editor" object and use it later.
              console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
              console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
              console.log('Focus.', editor);
          }}
      />
  )
}

export default NewEditor
