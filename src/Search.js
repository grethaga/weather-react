import React from "react";
import { useState } from "react";
import Weather from "./Weather";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(<Weather city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city.." onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{message}</p>
    </div>
  );
}
