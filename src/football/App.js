import React from 'react';
import ListFootball from './components/List';
import FootballProvider from './context/FootballProvider';

class Football extends React.PureComponent {
  render() {
    return(
      // share data tu FootballProvider cho cac component
      <FootballProvider>
        <ListFootball/>
      </FootballProvider>
    )
  }
}
export default Football;