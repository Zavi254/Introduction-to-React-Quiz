import React, { useState } from "react";
import range from './range.jpeg'
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

  // Challenge: Uncomment this code to complete quiz

function Child({update}) {
  return (
    <>
      <div>Child</div>
      <button onClick={update}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  function update() {
    console.log(value)
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child update />
      </div>
    </>
  );
}
// Uncomment this to tackle quiz


// // Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  const element = <h1>JSX is cool!</h1>
  const [hideElement, setHideElement] = useState(true);

  const toggle = () => {
    setHideElement(false)
  }

  
  return (
    
    <>
    {element}
    <img src={range} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{users.map((item, index)=> {
        return (
          <li key={index}>{item.name}</li>
        )
      })}</ul>
      <button onClick={toggle}>Hide Element Below</button>

      {hideElement ? <div>Toggle Challenge</div> : null}
      
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
