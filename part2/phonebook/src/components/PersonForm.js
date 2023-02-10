import React from "react";

const PersonForm = ({
  newName,
  newNumber,
  onAddPerson,
  onTextChange,
  onNumberChange,
}) => {
  return (
    <form onSubmit={onAddPerson}>
      <div>
        name: <input onChange={onTextChange} value={newName} />
      </div>
      <div>
        number: <input onChange={onNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
