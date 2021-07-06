// dinh nghia function components
import React from 'react';

const HeaderComponent = (props) => {
  // props : object chua tat cac cac props tu noi khac truyen vao
  // hien thi
  return(
    <React.Fragment>
      {/* warper component */}
      <h1>This is header - {props.title}</h1>
      <p> this is content header</p>
    </React.Fragment>
  )
}
export default HeaderComponent;