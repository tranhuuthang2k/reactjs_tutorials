import React, { Component } from "react";
import CardTheme from "./components/Card";
import SwitchTheme from "./components//Switch";
import "./theme.css";
import ThemeProvider from "./context/ThemeProvider";
export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <h1>Theme Switch</h1>
          <CardTheme />
          <SwitchTheme />
        </div>
      </ThemeProvider>
    );
  }
}
