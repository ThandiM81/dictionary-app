import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <p>Thandi's dictionary app</p>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
