import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setAge, setName, setSurname } from "./redux/person/personSlice";

function App() {
  // import selector and dispatch from react-redux
  const name = useSelector((state) => state.person.name);
  const surname = useSelector((state) => state.person.surname);
  const age = useSelector((state) => state.person.age);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {name} {surname}, {age}
      </h1>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => dispatch(setSurname(e.target.value))}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => dispatch(setAge(e.target.value))}
      />
    </div>
  );
}

export default App;
