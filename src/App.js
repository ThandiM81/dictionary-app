import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Intro">
          <header className="App-header">Dictionary</header>
        </div>
        <main>
          <Dictionary defaultKeyword="flower" />
        </main>
      </div>
    </div>
  );
}
