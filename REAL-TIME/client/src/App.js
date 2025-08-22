import React from 'react';
import Editor from './components/Editor';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Live Collaboration Editor</h1>
      <Editor />
    </div>
  );
}
export default App;