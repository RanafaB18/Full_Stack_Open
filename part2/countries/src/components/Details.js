import { useState, useEffect } from "react";
import axiosUtil from "../services";

const Details = ({ country, loading }) => {
  const countryName = country.name.official;
  const area = country.area;
  const languages = Object.values(country.languages);
  const flag = country.flags.png;
  const [latitude, longitude] = country.capitalInfo.latlng;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axiosUtil
      .getWeather(latitude, longitude)
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => {
        loading("Could not retrieve data from weather api. Please try again");
      });
  }, [latitude, longitude, loading]);

  if (!weather) {
    return null;
  }
  return (
    <div>
      <h2>{countryName}</h2>
      <div className="info">
        <p>capital {country.capital.join(" ")}</p>
        <p>area {area}</p>
      </div>
      <h4>languages:</h4>
      <ul>
        {languages.map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>

      <img src={flag} alt={"flag"} />
      <div>
        <h3>Weather in {countryName}</h3>
        <p>temperature {weather.main.temp} Celcius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={"icon"}
        />
        <p>wind {weather.wind.speed}</p>
      </div>
    </div>
  );
};

export default Details;
