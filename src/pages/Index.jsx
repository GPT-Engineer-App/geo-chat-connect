import React, { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((messages) => [...messages, inputText]);
      setInputText("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>GeoChat</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div style={{ display: "flex", marginTop: 20 }}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ flex: 1, marginRight: 10, padding: 5, border: "1px solid gray" }} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Index;
