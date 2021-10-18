import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import books from "./books.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Intro">
          <img className="headerPicture" src={books} alt="books" />
          <header className="App-header">Dictionary</header>
          <p>What word would you like to look up?</p>
        </div>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
