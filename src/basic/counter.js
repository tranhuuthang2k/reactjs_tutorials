import React from 'react';
import ButtonCounter from './components/counter/button';
import ResultCounter from './components/counter/result';
import Welcome from './components/counter/welcome';
import GoodBye from './components/counter/goodbye';

class Counter extends React.Component {
  // state : property trong class js 
  constructor(props) {
    // su dung lai dc tat cac props cua React.Component
    super(props);
    // khai bao state
    this.state = {
      count: 0
    }
    /*
      this.state = {
        count: this.state.count + val
      }
    */
  }

  // viet ham de cap nhat thay doi state count
  incrementCounter = (val) => {
    // bien val: du lieu cu cua state count
    // this.setState : no se merge 2 object lai voi nhau
    // chinh la object cu ban dau tao ra tu constructor
    // voi object truyen vao trong ham setState 
    // ma key cua object no giong nhau thi no se loai bo di cai object ban dau va thay the bang object moi
    this.setState({count: this.state.count + val})
  }

  decrementCounter = (val) => {
    // bien val: du lieu cu cua state count
    // this.setState : no se merge 2 object lai voi nhau
    // chinh la object cu ban dau tao ra tu constructor
    // voi object truyen vao trong ham setState 
    // ma key cua object no giong nhau thi no se loai bo di cai object ban dau va thay the bang object moi
    this.setState({count: this.state.count - val})
  }

  // khi ma state thay doi se keo theo viec render lai giao dien !

  // method trong class
  render(){
    return(
      <>
        <Welcome/>
        <ResultCounter count={this.state.count}/>
        <ButtonCounter
          types="button"
          names="increment"
          click={this.incrementCounter}
          val={this.state.count}
        > + </ButtonCounter>
        {/* click: props co gia tri la 1 function */}
        <ButtonCounter
          types="button"
          names="decrement"
          click={this.decrementCounter}
        > - </ButtonCounter>
        <GoodBye/>
      </>
    )
  }
}
export default Counter;