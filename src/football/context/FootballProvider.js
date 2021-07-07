// day la noi share data cho cac component
import React from 'react';
import { api } from '../services/api';
import { helper } from '../helpers/common';
import MyContext from './index';

class FootballProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      football: {} // du lieu hien thi
    }
  }

  // this.setState : ham xu ly bat dong bo
  // custom ham this.setState thanh xu ly dong bo
  setStateSync = (state) => {
    return new Promise( solve => {
      this.setState(state, solve);
    })
  }

  async componentDidMount() {
    await this.setStateSync({...this.state, loading: true});
    const data = await api.getDataFootball();
    if(!helper.isEmptyObject(data)){
      await this.setStateSync({...this.state, football: data})
    }
    await this.setStateSync({...this.state, loading: false});
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default FootballProvider;