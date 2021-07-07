import React from "react";
import { api } from "../services/api";
import { helper } from "../helpers/common";
import ListFootball from "../components/List";

import MyContext from "./index";
class FootballProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      football: {},
    };
  }
  setStateSync = (state) => {
    return new Promise((solve) => {
      this.setState(state, solve); // calback của promise
    });
  };
  async componentDidMount() {
    await this.setStateSync({ ...this.state, loading: true });
    const data = await api.getDataFootball();
    if (!helper.isEmptyObject(data)) {
      await this.setStateSync({ ...this.state, football: data });
    }
    await this.setStateSync({ ...this.state, loading: false });
  }
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <ListFootball />
      </MyContext.Provider>
    );
  }
}
export default FootballProvider;
