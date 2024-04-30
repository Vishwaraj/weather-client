import React from "react";

function WeatherDetails(props) {
  // "cityName": "Paris",
  // "temperature": 15,
  // "description": "Light rain",
  // "recommendedActivities": [
  //     "go for a walk",
  //     "nice day for a picnic"
  // ]

  console.log("from component", props.weatherDetails);

  return (
    <>
      <div>
        <p>{props.weatherDetails.cityName}</p>
        <p>{props.weatherDetails.temperature}</p>
        <p>{props.weatherDetails.description}</p>
        <ul>
          {props?.weatherDetails?.recommendedActivities.map(
            (activity, index) => {
              return <li key={index}>{activity}</li>;
            }
          )}
        </ul>
      </div>
    </>
  );
}

export default WeatherDetails;
