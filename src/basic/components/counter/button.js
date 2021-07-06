import React from 'react';

class ButtonCounter extends React.Component {
  render() {
    return (
      <button
        type={this.props.types}
        name={this.props.names}
        onClick={()=>this.props.click(1)}
      > {this.props.children} </button>
    )
  }
}

export default ButtonCounter;