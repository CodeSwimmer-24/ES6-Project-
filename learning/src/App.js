// import { Component, useState } from "react";
// import "./App.css";

// function App() {
//   const [personState, setpersoneState] = useState({
//     person: [
//       { name: "Max", age: 20 },
//       { name: "Mini", age: 10 },
//     ],
//   });

//   const [showPerson, setShowPerson] = useState(false);

//   const handleChange = (userName, age) => {
//     setpersoneState({
//       person: { name: userName, age: age },
//       // person: { name: "Max", age: 20 },
//     });
//   };

//   const toggleHandler = () => {
//     // setShowPerson(true);
//     const doesShow = showPerson;
//     setShowPerson(!doesShow);
//   };

//   let person;

//   if (showPerson) {
//     person = (
//       <div>
//         <h1>
//           {personState.person.map((per, i) => {
//             return ` ${i + 1} >  Hello my name is ${per.name} and my age is ${
//               per.age
//             }`;
//           })}
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div>
//         {/* <button onClick={() => handleChange("Max!")}>Click</button> */}
//         <button onClick={toggleHandler}>Click</button>
//         <button onClick={handleChange.bind(this, "Max!!", 24)}>Click</button>
//         <div>{person}</div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { Component } from "react";
import ValidationComp from "./ValidationComp";
import Char from "./Char";

export default class App extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text: text });
  };

  remove = (i) => {
    const txt = this.state.text.split("");
    txt.splice(i, 1);
    const UpdateText = txt.join("");
    this.setState({ text: UpdateText });
  };

  render() {
    const charList = this.state.text.split("").map((c, i) => {
      return <Char click={() => this.remove(i)} key={i} chr={c} />;
    });

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <ValidationComp text={this.state.text.length} />
        {charList}
      </div>
    );
  }
}
