import { useState, useRef, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your assistant. How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const chatRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: generateBotReply(input) }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotReply = (msg) => {
    return "This is a sample reply to: " + msg;
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className={\`\${darkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen flex items-center justify-center transition-colors\`}>
      <div className="w-full max-w-md rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-700">
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <span className="text-lg font-bold">Chatbot</span>
          <button onClick={() => setDarkMode(!darkMode)} className="text-sm bg-white text-blue-600 px-2 py-1 rounded">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-800">
          {messages.map((msg, i) => (
            <div key={i} className={\`flex \${msg.sender === 'user' ? 'justify-end' : 'justify-start'}\`}>
              <div className={\`px-4 py-2 rounded-lg max-w-xs \${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}\`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-gray-400 text-sm italic">Bot is typing...</div>
          )}
        </div>
        <div className="p-4 border-t bg-gray-700 flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            className="flex-1 border rounded-lg px-3 py-2 text-black"
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;