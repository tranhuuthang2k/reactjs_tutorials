import React from 'react';

class WelcomeComponent extends React.PureComponent {
  // check dc duoc lieu co can render lai giao dien ko ?
  // tu dong goi method shouldcomponentupdate trong class component ra xu ly
  render() {
    console.log(`component WelcomeComponent da dc render`);
    return(
      <h1> Welcome you !</h1>
    )
  }
}
export default WelcomeComponent;