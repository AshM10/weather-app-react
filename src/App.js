import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine />

      <small>
        <a href="https://github.com/AshM10/weather-app-react" target="_blank">
          Open-source
        </a>{" "}
        code, by Ash Moreno
      </small>
    </div>
  );
}
