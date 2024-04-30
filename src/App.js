import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import { useState } from "react";
import axios from "axios";
import WeatherDetails from "./components/weatherDetails/WeatherDetails";

function App() {
  // const [city, setCity] = useState("");
  const [weatherDetails, setWeather] = useState(null);

  const url = "http://localhost:4000";

  // console.log(city);

  const fetchWeatherData = async (city) => {
    let response = await axios.get(`${url}/fetch-weather/${city}`);
    if (response.data) {
      setWeather(response.data.data);
    }
  };

  return (
    <>
      <div>
        <Form
          fetchWeatherData={fetchWeatherData}
          // setCity={setCity}
          // city={city}
        />
        {weatherDetails ? (
          <WeatherDetails weatherDetails={weatherDetails} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
