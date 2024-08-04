import "./index.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        Open-sourced on{" "}
        <a href="https://github.com/grethaga/weather-react">GitHub</a> and
        hosted on <a href="https://react-weather-pjct.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
