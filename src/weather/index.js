// eslint-disable-next-line
import React from "react";
import SearchWeather from "./components/search";
import InfoWeather from "./components/infoWeather";
import { api } from "./Services/api";
import { helper } from "./helpers/common";
class AppWeather extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wheather: {},
    };
  }
  setStateSync = (state) => {
    return new Promise((solve) => {
      this.setState(state, solve); // calback của promise
    });
  };
  SearchWeatherByCity = async (city = "") => {
    console.log(city);
    if (city !== "") {
      await this.setStateSync({ ...this.state, loading: true });
      const data = await api.getDataWeather(city);
      if (data) {
        await this.setStateSync({ ...this.state, wheather: data });
      }
    }
    await this.setStateSync({ ...this.state, loading: false });
  };

  render() {
    return (
      <>
        <SearchWeather
          loading={this.state.loading}
          search={this.SearchWeatherByCity}
        />
        {!helper.isEmptyObject(this.state.wheather) && (
          <InfoWeather data={this.state.wheather} />
        )}
      </>
    );
  }
}

export default AppWeather;
