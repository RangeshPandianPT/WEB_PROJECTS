import React, { useState, useEffect, useRef } from 'react';

const paragraph = "The quick brown fox jumps over the lazy dog.";

function App() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (input === paragraph) {
      setFinished(true);
      const endTime = Date.now();
      const duration = (endTime - startTime) / 60000; // in minutes
      const wordsTyped = paragraph.split(" ").length;
      setWpm(Math.round(wordsTyped / duration));
      setErrors(calculateErrors(paragraph, input));
    }
  }, [input]);

  const calculateErrors = (original, typed) => {
    let count = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] !== original[i]) count++;
    }
    return count;
  };

  const reset = () => {
    setInput("");
    setStartTime(null);
    setWpm(0);
    setErrors(0);
    setFinished(false);
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Typing Speed Tester</h1>
        <p className="mb-4 text-gray-300">{paragraph}</p>
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 text-black rounded"
          rows="4"
          disabled={finished}
        />
        <div className="mt-4">
          <p className="text-green-400">WPM: {wpm}</p>
          <p className="text-red-400">Errors: {errors}</p>
          {finished && <p className="text-blue-400">Test Completed!</p>}
        </div>
        <button
          onClick={reset}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;