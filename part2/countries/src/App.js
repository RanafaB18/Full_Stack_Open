import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import axiosUtil from "./services";

const App = () => {
  const [countryText, setCountryText] = useState("");
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleChange = (event) => {
    setCountryText(event.target.value);
    filterProcess(event.target.value);
  };
  const filterProcess = (countryQuery) => {
    setFilterCountries(
      countries.filter((country) => {
        const countryName = country.name.official.toLowerCase();
        return countryName.includes(countryQuery.toLowerCase());
      })
    );
  };
  useEffect(() => {
    setLoadingMessage("Loading data from countries api");
    axiosUtil
      .fetchData()
      .then((response) => {
        setCountries(response);
        setLoadingMessage(null);
      })
      .catch((error) => {
        setLoadingMessage(
          "Could not retrieve data from countries api. Please try again"
        );
      });
  }, []);

  return (
    <div>
      <Notification message={loadingMessage} />
      <p>
        find countries <input value={countryText} onChange={handleChange} />
      </p>
      {countryText && (
        <Filter countries={filterCountries} loading={setLoadingMessage} />
      )}
    </div>
  );
};

export default App;
