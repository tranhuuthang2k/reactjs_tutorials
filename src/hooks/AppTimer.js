import React, {useState} from 'react';
import TimerClock from './timer';

const AppTimer = () => {
  const [show, setShowTimer] = useState(true);

  const showTimer = () => {
    setShowTimer(!show);
  }
  return(
    <>
       { show && <TimerClock/> }
      <br/>
      <button onClick={() =>showTimer()}> Clear timer </button>
    </>
  )
}
export default React.memo(AppTimer);