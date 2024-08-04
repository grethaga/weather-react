import axios from "axios";
import React from "react";
import { useState } from "react";

export default function (props) {
  let [temp, setTemp] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    console.log(response.data);
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    getEmojiFromIcon(response.data.weather[0].icon);
  }

  function getEmojiFromIcon(icon) {
    const iconToEmojiMap = {
      "01d": "☀️", // klares Wetter
      "01n": "🌙", // klarer Nachthimmel
      "02d": "⛅", // teilweise bewölkt
      "02n": "☁️", // bewölkt bei Nacht
      "03d": "☁️", // bewölkt
      "03n": "☁️", // bewölkt bei Nacht
      "04d": "☁️", // sehr bewölkt
      "04n": "☁️", // sehr bewölkt bei Nacht
      "09d": "🌧️", // Regen
      "09n": "🌧️", // Regen bei Nacht
      "10d": "🌦️", // Regenschauer
      "10n": "🌧️", // Regenschauer bei Nacht
      "11d": "🌩️", // Gewitter
      "11n": "🌩️", // Gewitter bei Nacht
      "13d": "❄️", // Schnee
      "13n": "❄️", // Schnee bei Nacht
      "50d": "🌫️", // Nebel
      "50n": "🌫️", // Nebel bei Nacht
    };
    setIcon(iconToEmojiMap[icon]);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=cf6b50b908fa2e0baca3eed8a569a5f6&units=metric`;
  axios.get(url).then(showWeather);

  return (
    <ul>
      <li>Temperature: {temp}°C</li>
      <li>Description: {description}</li>
      <li>Humidity: {humidity}%</li>
      <li>Wind: {wind}km/h</li>
      <li>{icon}</li>
    </ul>
  );
}
