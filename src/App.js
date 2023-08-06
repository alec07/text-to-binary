
import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [binary, setBinary] = useState('');

  const convertToBinary = (text) => {
    let binaryText = '';
    for (let i = 0; i < text.length; i++) {
      binaryText += text[i].charCodeAt(0).toString(2) + ' ';
    }
    return binaryText;
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setBinary(convertToBinary(inputText));
  };

  const handleReset = () => {
    setText('');
    setBinary('');
  };

  return (
    <div className="container mx-auto mt-10 px-4 max-w-md ">
      <h1 className="text-3xl font-bold mb-4 text-center">Text to Binary Converter</h1>
      <textarea
        className="border p-2 mb-4 resize-none w-full h-40"
        placeholder="Enter text..."
        value={text}
        onChange={handleInputChange}
      />
      <div className="border p-2 break-words">{binary}</div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
    </div>
  );
};

export default App;
