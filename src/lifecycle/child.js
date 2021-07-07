import React from 'react';

class ChildComponent extends React.Component {

  componentWillUnmount() {
    // ham nay se tu dong chay khi component bi xoa
    // truoc khi component bi xoa mh co the lam dieu gi do......
    console.log('ChildComponent vua bi xoa');
  }

  render() {
    return (
      <h1> This is child component</h1>
    )
  }
}
export default ChildComponent;