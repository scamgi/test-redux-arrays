import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLastPerson } from "../redux/person/peopleSlice";

export default function showPeople() {
  const people = useSelector((state) => state.people);
  const dispatch = useDispatch();

  return (
    <div>
      {people.map((person) => (
        <div key={person.name}>
          <p>
            {person.name} {person.surname}, {person.age}
          </p>
        </div>
      ))}

      <button onClick={() => dispatch(removeLastPerson())}>
        Delete last one
      </button>
    </div>
  );
}
