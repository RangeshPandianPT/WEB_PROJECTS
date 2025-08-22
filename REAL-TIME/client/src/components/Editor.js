import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');

function Editor() {
  const editorRef = useRef();

  useEffect(() => {
    const editor = editorRef.current;
    socket.on('document', data => {
      editor.innerHTML = data;
    });

    editor.addEventListener('input', () => {
      socket.emit('document', editor.innerHTML);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div
      ref={editorRef}
      contentEditable
      className="border p-4 bg-white rounded-md shadow-md h-[60vh] overflow-auto"
    ></div>
  );
}
export default Editor;