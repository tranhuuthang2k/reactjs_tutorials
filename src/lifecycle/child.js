import React, { Component } from "react";

export default class child extends Component {
  componentWillUnmount() {
    //   trước khi component bị xóa, mình có thể làm gì đó....
    console.log(`child component delete`);
  }
  render() {
    return <div>this is child component</div>;
  }
}
