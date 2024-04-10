import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pushPerson } from "../redux/person/peopleSlice";

export default function addPerson() {
  // create a state for name, surname and age.
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(18);
  const dispatch = useDispatch();

  // create a function to handle the change in the input fields.
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  // create a function to handle the submit button click.
  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch the action to the store.
    const person = {
      name,
      surname,
      age,
    };

    dispatch(pushPerson(person));
    setName("");
    setSurname("");
    setAge(18);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          value={surname}
          placeholder="Surname"
          onChange={handleSurnameChange}
        />
        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={handleAgeChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
