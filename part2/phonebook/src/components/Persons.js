import React from "react";

const Persons = ({ data, handleDelete }) => {
  return (
    <>
      {data.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button>
          </p>
        );
      })}
    </>
  );
};

export default Persons;
