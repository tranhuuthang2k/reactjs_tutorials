import React from "react";
import ChildComponent from "./child";
class ParentComponent extends React.Component {
  // 1- giai doan mounting : component dc tao ra
  constructor(props) {
    // phuong thuc se chay dau tien trong class
    super(props); // su dung lai toan bo props cua React.Component
    // vi extends React.Component : dc su dung luon this.props
    // noi day se la cho de mh khai bao state
    //  chạy 1 lần
    this.state = {
      count: 0,
      color: "black",
      show: true, // child component có hiển thị hay k
    };
    console.log(`constructor cua ParentComponent da chay`);
  }
  //2
  // Hàm này sẽ chạy trước render, dĩ nhiên contructor chạy trc
  //  constructor > getDerivedStateFromProps > render
  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps of ParentComponent on mounting`);
    console.log("props getDerivedStateFromProps of ParentComponent", props);
    console.log("state getDerivedStateFromProps of ParentComponent", state);
    return null;
  }

  componentDidMount() {
    //thường call api từ backend
    //  chạy duy nhất 1 lần
    console.log("component did mount");
  }
  changeCounter = () => {
    this.setState({ count: this.state.count + 1, color: "red" });
  };
  hideChildComponent = () => {
    this.setState({ show: !this.state.show });
  };
  shouldComponentUpdate(nextProps, nextState) {
    // quyết định có chạy lại hàm render khi state thay đổi k
    // nếu return true thì sẽ chạy lại hàm render
    // ngược lại  return false thì ko chạy và ko cập nhật lại giao diện
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);

    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // hàm chạy khi state or props của component dc cập nna6t5
    // trước khi giao diện dc hiển thị  (reender lại),
    // lúc này sẽ xử lý trước khi render
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    return "yellow"; // componentDidUpdate sẽ nhận giá trị này rồi xử lý
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // phuong thuc chay cuoi cung
    // sau khi giao dien cap nhat
    // chạy sau render thì ko cần cập nhật state gì nữa
    document.getElementById("title").style.color = snapshot;
  }
  // Hiển thị component
  render() {
    console.log("render running");
    return (
      <div>
        <h1 id="title" style={{ color: this.state.color }}>
          this is component parrent -count {this.state.count}
        </h1>
        <button onClick={() => this.changeCounter()}>change counter</button>
        {this.state.show && <ChildComponent />}
        <button onClick={() => this.hideChildComponent()}>
          remove child component
        </button>
      </div>
    );
  }
}

export default ParentComponent;
