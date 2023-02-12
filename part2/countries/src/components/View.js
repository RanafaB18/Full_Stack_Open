import "../index.css";
import { useState } from "react";
import Details from "./Details";

const View = ({ country }) => {
  const [show, setShow] = useState(false);
  const countryName = country.name.official;

  const handleClick = (country) => {
    setShow(!show);
  };
  if (!show) {
    return (
      <p className="countries">
        {countryName} <button onClick={handleClick}>show</button>
      </p>
    );
  }
  return <Details country={country} />;
};
export default View;
