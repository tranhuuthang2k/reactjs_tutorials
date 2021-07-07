import React from "react";
import ThemeContext from "../context/ThemeContext";
const CardTheme = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <div className="Card">
      <div className="img" />
      <h2>The gioi cua bon Ngao</h2>
      <p> Dua voi dai ca a ? lao ca cho !!!!</p>
      <button> {dark ? "Dark Theme" : "Light theme"}</button>
    </div>
  );
};
export default React.memo(CardTheme);
