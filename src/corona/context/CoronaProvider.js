import React from "react";
import { api } from "../services/api";
import { helper } from "../helpers/common";
import CoronaContext from "./index";

class CoronaProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // tao hieu ung loading call data - bao nguoi dung cho
      virus: {}, // luu thong tin data tu api
      error: {}, // thong bao loi
    };
  }

  // this.setState : ham xu ly bat dong bo
  // custom ham this.setState thanh xu ly dong bo
  setStateSync = (state) => {
    return new Promise((solve) => {
      this.setState(state, solve);
    });
  };

  async componentDidMount() {
    await this.setStateSync({ ...this.state, loading: true });
    const data = await api.getDataVirusCorona();
    if (!helper.isEmptyObject(data)) {
      await this.setStateSync({ ...this.state, virus: data, error: {} });
    } else {
      await this.setStateSync({
        ...this.state,
        virus: {},
        error: { cod: 404, mess: `Not found data` },
      });
    }
    await this.setStateSync({ ...this.state, loading: false });
  }

  render() {
    return (
      <CoronaContext.Provider value={this.state}>
        {this.props.children}
      </CoronaContext.Provider>
    );
  }
}
export default CoronaProvider;
