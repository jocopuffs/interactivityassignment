import React, { useState } from 'react';
import './App.css';

function App() {
  const [activate, setActivate] = useState("");

  function onClick(event) {
    let id = event.target.id;
    setActivate(id);
  } 

    return (
    <div className="parent">
      <button id="button one is clicked" className={(activate==="firstbutton") ? "active" : ""} onClick={onClick}>
        First Button
      </button>
      <button id="button two is clicked" className={(activate==="chicken") ? "active" : ""} onClick={onClick}>
        Second Button
      </button>
      <button id="button three is clicked" className={(activate==="thirdbutton") ? "active" : ""} onClick={onClick}>
        Third Button
      </button>
      {activate}
    </div>
  );
}


export default App;