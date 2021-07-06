import React from 'react';

const GoodbyeComponent = () => {
  console.log(`component GoodbyeComponent da dc render`);
  return (
    <h2> see you again ! </h2>
  )
}
// ap dung cho function component gan tuong tu React.PureComponent cua class
export default React.memo(GoodbyeComponent);