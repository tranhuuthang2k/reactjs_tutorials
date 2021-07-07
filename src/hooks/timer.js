import React, { useState, useEffect, useRef} from 'react';

const TimeClock = () => {
  const [timeString, setTimeString] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const currentTimeString = `${hours}:${minutes}:${seconds}`;
      setTimeString(currentTimeString);
    }, 1000);

    //componentWillUnmount()
    return () => {
      // toi biet component bi xoa
      // hanh dong setInterval chua bi mat
      // can huy hanh dong setInterval truoc khi component bi xoa
      clearInterval(intervalRef.current);
    };

  }, []); // chay nhu componentDidMount
  return (
    <div style={{ fontSize: '48px' }}>{timeString}</div>
  );
}
export default React.memo(TimeClock);