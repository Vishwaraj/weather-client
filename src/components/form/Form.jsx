import React from "react";

function Form({ setCity, city, fetchWeatherData }) {
  return (
    <>
      <select
        value={city}
        onChange={(e) => fetchWeatherData(e.target.value)}
        name="cityName"
      >
        <option value="mumbai">Mumbai</option>
        <option value="pune">Pune</option>
        <option value="bangalore">Bangalore</option>
        <option value="delhi">Delhi</option>
        <option value="satara">Satara</option>
        <option value="paris">Paris</option>
      </select>
    </>
  );
}

export default Form;
