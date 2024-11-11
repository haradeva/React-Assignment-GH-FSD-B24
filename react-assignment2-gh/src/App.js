import React, { useState } from "react";
import ItemList from "./components/ItemList";
import LoginButton from "./components/LoginButton";

function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoginStatus = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  return (
    <>
      <h1>React Assignment-2</h1>

      {/* Question1-ItemList Starts*/}
      <div>
        <ItemList items={items} />
      </div>
      {/* Question1-ItemList Ends*/}

      {/* Question2-LoginButton Starts*/}
      <div>
        <LoginButton isLoggedIn={isLoggedIn} />
        <button onClick={toggleLoginStatus}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      {/* Question2-LoginButton Ends*/}
    </>
  );
}

export default App;
