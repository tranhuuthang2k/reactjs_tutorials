import React from 'react';

class ResultCounter extends React.Component {
  // this.props : lay dc toan bo props
  render(){
    return (
      <h1>{this.props.count}</h1>
    )
  }
}
export default ResultCounter;