import React, { useState } from 'react';

export default function Counter() {
  // khai bao state
  const [count, setCount] = useState(0); // 0: gan gia tri mac dinh cho state
  // count : state
  // setCount: ham thay doi state

  // vi trong fnc khong ton tai this.setState nen can dung hooks useState de thay doi state
  // vi trong fnc khong co constructor de khai bao state can dung hooks useState de khai bao state

  // useState: luon tra ve 1 mang =>  chua 2 thanh phan la state va phuong thuc thay doi state
  // tat ca hooks trong reactjs luon luon co tien to use dung dang truoc
  // vi du : useContext : hooks
  // tat ca cac hooks chi dc su dung trong function component
  // hooks chi dc ap dung cho phien ban reactJS 16.8 tro len
  // hooks ko phai la de thay the hay xo bo hoan toan class component
  // ban chat chi la ho tro them tinh nang cho function component ma thoi

  const changeCount = () => {
    // setCount: dung thay doi state da dc khai bao
    // count : state
    setCount(count + 1);
  }

  return (
    <>
      <h1> {count} </h1>
      <button onClick={() => changeCount()}> + </button>
    </>
  )
}