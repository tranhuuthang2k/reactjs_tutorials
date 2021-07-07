import React from 'react';
import ChildComponent from './child';

class ParentComponent extends React.Component {
  // 1- giai doan mounting : component dc tao ra
  constructor(props) {
    // phuong thuc se chay dau tien trong class
    super(props); // su dung lai toan bo props cua React.Component
    // vi extends React.Component : dc su dung luon this.props
    // noi day se la cho de mh khai bao state
    this.state = {
      count: 0,
      color: 'black',
      show: true // quy dinh child component co hien thi hay ko?
    }
    console.log(`constructor cua ParentComponent da chay`);
  }

  static getDerivedStateFromProps(props, state) {
    // chay sau constructor
    // chay truoc ham render
    // muc dich : cap nhat lai state theo su bien doi cua props truyen vao cho component day
    console.log(`getDerivedStateFromProps of ParentComponent`);
    console.log('props getDerivedStateFromProps of ParentComponent', props);
    console.log('state getDerivedStateFromProps of ParentComponent', state);
    // neu muon cap nhat lai state thi goi this.setState return ve 1 object
    // return null ko update gi ca
    return null
  }

  componentDidMount() {
    // sau khi giao dien da dc hien thi thi componentDidMount se chay
    // thong thuong noi day se call api tu server backend de lay data ve
    // no chi chay duy nhat 1 lan trong mounting
    console.log(`componentDidMount of ParentComponent running`);
  }

  changeCounter = () => {
    this.setState(state => ({ 
      count: state.count + 1,
      color: 'blue' 
    }));
  }

  hideChildComponent = () => {
    this.setState({show: !this.state.show});
  }

  shouldComponentUpdate(nextProps, nextState) {
    // chay khi ma cap nhat state hay props cua component
    // chi chay o giai doan updating
    // ham se quyet dinh viec co render lai giao dien hay ko ? (chay lai ham ren der hay ko?)
    // neu return true : se chay lai ham render
    // neu return false: se ko chay lai ham render(ko cap nhat lai giao dien)
    console.log('nextProps shouldComponentUpdate', nextProps);
    console.log('nextState shouldComponentUpdate', nextState);
    // neu khong goi ham nay : ma su dung React.Component thi mac dinh luon luon render
    // thong thuong so sanh nextProps voi nextState khong bang nhau thi se cap nhat lai
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ham nay chi chay khi state hay props cua component dc cap nhat
    // chi chay o giai doan updating
    // no se chay sau ham render - truoc khi giao dien duoc hien thi
    // ham se la noi bo tro ket qua can tinh toan cho componentDidUpdate
    console.log('prevProps getSnapshotBeforeUpdate', prevProps);
    console.log('prevState getSnapshotBeforeUpdate', prevState);

    return 'yellow'; // yellow se dc componentDidUpdate nhan lay
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // trong nay ko  cap nhat lai state hay props dc nua
    // phuong thuc chay cuoi cung trong giai doan updating
    // sau khi giao dien dc cap nhat... mh muon lam gi do de xu lai giao dien lan cuoi
    // text h1 lieu co con mau blue ko ???
    // css bang js
    document.getElementById('title').style.color = snapshot;
  }

  // hien thi component
  render() {
    console.log(`render of ParentComponent on mounting running`);
    return(
      <>
        <h1 id="title" style={{ color: this.state.color }}> This is component parent - counter : {this.state.count} </h1>
        <button onClick={() => this.changeCounter()}> change counter </button>

        {/* dieu kien hien thi child component */}
        { this.state.show && <ChildComponent/> }
        <button onClick={() => this.hideChildComponent()}> remove child component </button>
      </>
    )
  }
}

export default ParentComponent;