import React from 'react';
import SearchWeather from './components/Search';
import InfoWeather from './components/InfoWeather';
import { api } from './services/api';
import { helper } from './helpers/common';

class AppWeather extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      weather: {} // du lieu thoi tiet
    }
  }

  // this.setState : ham xu ly bat dong bo
  // custom ham this.setState thanh xu ly dong bo
  setStateSync = (state) => {
    return new Promise( solve => {
      this.setState(state, solve);
    })
  } 

  // viet ham tim kiem thong tin theo ten thanh pho
  searchWeatherByCity = async (city = '') => {
    if(city !== '') {
      // phai nhap gia tri
      // setState - doi xu ly xong
      await this.setStateSync({...this.state, loading: true});
      //xu ly hanh dong khac khi state loading cap nhat xong
      const data = await api.getDataWeather(city);
      if(!helper.isEmptyObject(data)){
        // phai co data tra ve moi cap nhat lai state
        await this.setStateSync({...this.state, weather: data})
      }
      // moi thu da xong het roi - cap nhat lai loading ko load nua
      await this.setStateSync({...this.state, loading: false});
    }
  }

  render() {
    return(
      <>
        <SearchWeather
          loading={this.state.loading}
          search={this.searchWeatherByCity}
        />
        { !helper.isEmptyObject(this.state.weather) && <InfoWeather dataWeather={this.state.weather} /> }
      </>
    )
  }
}

export default AppWeather;