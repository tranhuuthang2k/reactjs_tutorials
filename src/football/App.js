import React from "react";
// import ListFootball from "./components/List";
// import FootballProvider from "./context/FootballProvider";
import Provider from "./context/FootballProvider";
export default class App extends React.PureComponent {
  render() {
    return <Provider />;
  }
}
