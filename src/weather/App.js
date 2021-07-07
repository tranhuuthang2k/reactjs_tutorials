import React, { useState } from 'react';
import SearchWeather from './components/Search';
import InfoWeather from './components/InfoWeather';
import { api } from './services/api';
import { helper } from './helpers/common';

const AppWeather = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const searchWeatherByCity = async (city = '') => {
    if(city !== '') {
      // phai nhap gia tri
      setLoading(true);
      //xu ly hanh dong khac
      const data = await api.getDataWeather(city);
      if(!helper.isEmptyObject(data)){
        // phai co data tra ve moi cap nhat lai state
        setWeather(data);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <SearchWeather
        loading={loading}
        search={searchWeatherByCity}
      />
      { !helper.isEmptyObject(weather) && <InfoWeather dataWeather={weather} /> }
    </>
  )
}
export default React.memo(AppWeather);