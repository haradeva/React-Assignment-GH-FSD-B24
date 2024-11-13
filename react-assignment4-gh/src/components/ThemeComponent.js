import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  const buttonText = theme === "light" ? "Dark" : "Light";

  return (
    <div style={style}>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>{buttonText}</button>
    </div>
  );
}
