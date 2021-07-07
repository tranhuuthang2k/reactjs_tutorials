import React, { Component } from "react";
import ThemeContext from "./ThemeContext";
import PropType from "prop-types";
const themeLight = [
  "--border: rgba(0, 0, 0, 0.2)",
  "--shadow: #000",
  "--heading: rgba(255, 100, 0, 1)",
  "--main: #1d8f13",
  "--text: #000",
  "--textAlt: #fff",
  "--inactive: rgba(0, 0, 0, 0.3)",
  "--background: #fff",
];
const themeDark = [
  "--border: rgba(255,255,255,.1)",
  "--shadow: #000",
  "--heading: rgba(255,255,5,.9)",
  "--main: #79248f",
  "--text: rgb(255, 255, 255)",
  "--textAlt: #fff",
  "--inactive: rgba(255,255,255,.3)",
  "--background: #2D2D2D",
];

export default class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
    };
  }
  applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };
  toggle = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: backgroud .ts ease";
    this.setState({ ...this.state, dark: !this.state.dark });
    window.localStorage.setItem("darkthem", this.state.dark);
  };
  componentDidMount() {
    const lastTheme = Window.localStorage.getItem("darkTheme");
    if (lastTheme === "true") {
      this.setState({ ...this.state, dark: true });
    } else {
      this.setState({ ...this.state, dark: false });
    }
  }
  componentDidUpdate() {
    const theme = Window.localStorage.getItem("darkTheme");
    if (theme === "true") {
      this.applyTheme(themeDark);
    } else {
      this.applyTheme(themeLight);
    }
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ dark: this.state.dark, toggle: this.toggle }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
ThemeProvider.PropType = {
  children: PropType.node.isRequired,
};
