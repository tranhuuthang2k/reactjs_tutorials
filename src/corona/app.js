import React from 'react';
import LayoutCorona from './components/Layout-v2';
import GlobalCorona from './components/Global-v2';
import CountriesCorona from './components/Countries-v2';
// import './components/style.css';
import CoronaProvider from './context/coronaProviderV2';

class AppCorona extends React.PureComponent {
  render() {
    return(
      <CoronaProvider>
        <LayoutCorona>
          <h1 style={{ textAlign: 'center' }}> Virus corona </h1>
          <GlobalCorona/>
          <CountriesCorona/>
        </LayoutCorona>
      </CoronaProvider>
    )
  }
}

export default AppCorona;