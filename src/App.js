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
        <footer>
          <small>
            This project was coded by ThandiM and is open-sourced on{" "}
            <a
              href="https://github.com/ThandiM81/dictionary-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://vigorous-galileo-11849e.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
