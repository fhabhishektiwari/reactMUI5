import JoditEditor from 'jodit-react'
import React, { useState, useMemo, useRef } from 'react'

const TextEditorFour = ({placeholder}) => {
    const editor=useRef(null);
    const [content,setContent]=useState('');
    // const config = useMemo(
    //     {
    //         // readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    //         placeholder: placeholder || 'Start typings...'
    //     },
    //     [placeholder]
    // );
  return (
    <div>
      <JoditEditor
              ref={editor}
              value={content}
              
            //   config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => setContent(newContent)}    
      />

      <p>{content}</p>
    </div>
  )
}

export default TextEditorFour
