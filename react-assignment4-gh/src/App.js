import React from "react";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";

function App() {
  return (
    <>
      <h1>React Assignment-4</h1>
      <Counter />
      <UserList />
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
