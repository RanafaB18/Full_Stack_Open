import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const fetchData = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const getWeather = (lat, lon) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return request.then((response) => response.data);
};

const axiosUtil = {
  fetchData,
  getWeather,
};

export default axiosUtil;
