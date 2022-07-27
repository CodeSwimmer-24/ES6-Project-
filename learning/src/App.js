import { Component, useState } from "react";
import "./App.css";

function App() {
  const [personState, setpersoneState] = useState({
    person: [
      { name: "Max", age: 20 },
      { name: "Mini", age: 10 },
    ],
  });

  const [showPerson, setShowPerson] = useState(false);

  const handleChange = (userName, age) => {
    setpersoneState({
      person: { name: userName, age: age },
      // person: { name: "Max", age: 20 },
    });
  };

  const toggleHandler = () => {
    // setShowPerson(true);
    const doesShow = showPerson;
    setShowPerson(!doesShow);
  };

  let person;

  if (showPerson) {
    person = (
      <div>
        <h1>
          {personState.person.map((per, i) => {
            return ` ${i + 1} >  Hello my name is ${per.name} and my age is ${
              per.age
            }`;
          })}
        </h1>
      </div>
    );
  }

  return (
    <>
      <div>
        {/* <button onClick={() => handleChange("Max!")}>Click</button> */}
        <button onClick={toggleHandler}>Click</button>
        <button onClick={handleChange.bind(this, "Max!!", 24)}>Click</button>
        <div>{person}</div>
      </div>
    </>
  );
}

export default App;
