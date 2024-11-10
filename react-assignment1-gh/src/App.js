import React from "react";
import HelloWorld from "./components/HelloWorld";
import Greeting from "./components/Greeting";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <div>
      <HelloWorld />
      <Greeting name="John" />
      <StyledComponent />
    </div>
  );
}

export default App;
