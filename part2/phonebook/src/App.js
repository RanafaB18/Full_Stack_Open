import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [copy, setCopy] = useState(persons);

  React.useEffect(() => {
    setCopy(persons);
  }, [persons]);

  const handleTextChange = (event) => {
    setNewName(event.target.value);
  };
  const handleFilterProcess = (name) => {
    // Filters based on what the name starts with
    // setCopy(persons.filter((n) => n.name.toLowerCase().slice(0, name.length) === name.toLowerCase()));
    // setCopy(persons.filter((n) => n.name.toLowerCase().startsWith(name.toLowerCase())));

    // Filters if the string contains the typed characters
    setCopy(
      persons.filter((n) => n.name.toLowerCase().includes(name.toLowerCase()))
    );
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
    handleFilterProcess(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    if (uniqueName(newName)) {
      setPersons([
        ...persons,
        { name: newName, number: newNumber, id: persons.length + 1 },
      ]);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };
  const uniqueName = (name) => {
    const found = persons.find(
      (n) => n.name.toLowerCase() === name.toLowerCase()
    );
    return found === undefined;
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterName={filterName} onFilterChange={handleFilterChange} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onAddPerson={addPerson}
        onTextChange={handleTextChange}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons data={copy}/>
    </div>
  );
};

export default App;
