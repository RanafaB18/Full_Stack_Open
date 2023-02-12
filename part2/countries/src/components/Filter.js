import Details from "./Details";
import View from "./View";
const Filter = ({ countries, loading }) => {
  if (countries.length === 1) {
    const country = countries[0];
    return <Details country={country} loading={loading} />;
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <div>
      {countries.map((country) => {
        const countryName = country.name.official;
        return <View key={countryName} country={country} />;
      })}
    </div>
  );
};

export default Filter;
