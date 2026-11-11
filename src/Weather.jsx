import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Brussels",
    date: "Thursday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 19,
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather container border rounded mt-3 p-4">
      <form>
        <div className="row g-4">
          <div className="col-12 col-md-9 rounded">
            <input
              type="search"
              className="form-control w-100"
              name=""
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-12 col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1 className="mt-3">{weatherData.city}</h1>
      <ul className="ps-0">
        <li>Last updated: {weatherData.date}</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="icon col-12 col-md-6">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="temperature-icon"
          />
          <span className="temperature-figure">{weatherData.temperature}</span>
          <a href="#" className="temperature-unit-celsius">
            °C{" "}
          </a>
          <span className="temperature-unit-divider">|</span>
          <a href="#" className="temperature-unit-fahrenheit">
            {" "}
            °F
          </a>
        </div>
        <div className="weather-details col-12 col-md-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/Lfaliji"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chadia Lfaliji
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/Lfaliji/weather-app-react-vite"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-app-react-with-vite.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
