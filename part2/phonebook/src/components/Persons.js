import React from "react";

const Persons = ({ data }) => {
  return (
    <>
      {data.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </>
  );
};


export default Persons
