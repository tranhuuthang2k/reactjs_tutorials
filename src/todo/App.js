import React from 'react';
import LayoutTodo from './components/layout';
import InputTodo from './components/input-todo';
import ButtonAddTodo from './components/button-add-todo';
import ListTodo from './components/list-todo';
import HeaderTodo from './components/header';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',  // ten cong viec
      id: 1, // ma cong viec
      todo: [] // mang luu tat ca cong viec
    }
  }
  // luu dc du lieu nguoi dung nhap vao o input vao trong state cua minh
  getNameTodo = (event) => {
    // event : su kien tuong tac cua nguoi dung voi thanh phan the input
    // tu event: lay ra dc gia tri data nam trong thanh phan input
    let nameTodo = event.target.value; // kien thuc cua JS
    // cap nhat nameTodo vao trong state
    if(nameTodo.length > 0 && nameTodo !== ''){
      this.setState({name: nameTodo});
    }
  }

  // xu ly viec nguoi bam button add
  handleAddTodo = () => {
    // kiem tra state name todo co du lieu ko?
    if(this.state.name !== ''){
      // cap nhat id cong viec: moi lan tang id cong viec len, 
      // dam bao ko id nao trung nhau
      // ham this.setState: no nhan vao la 1 object hoac la 1 function
      this.setState(state => ({id: state.id + 1}) );
      const newTodo = {
        nameWork: this.state.name,
        idWork: this.state.id,
        done: false
      }
      this.setState(state => ({
        todo: [...state.todo, newTodo], // do them cong viec moi vao mang cong viec da ton tai
        name: '' // xoa cong viec vua nhap
      }))
    }
  }

  // xoa item todo
  removeItemTodo = (id) => {
    // id: biet dc la can xoa cong viec nao trong dach sach cong viec
    // lam the nao de xoa ?
    // id : da co
    // danh sach cong viec: this.state.todo
    // tra ve mot mang moi: trong mang do khong chua object cong viec chua id da xoa
    const newListItems = this.state.todo.filter(item => item.idWork !== id);
    // sau do cap nhai lai nguyen state todo
    this.setState({ todo: newListItems });
  }

  // finish item todo
  finishItemTodo = (id) => {
    // can update key "done" tu true <=> false trong object item cua mang state todo theo dung id truyen len !

    // khong dc phep lam mat hay them item cong viec
    const upTodo = this.state.todo.map(item => item.idWork === id ? {...item, done: !item.done} : item);
    this.setState({ todo: upTodo });

  }

  render() {
    //console.log(this.state.todo);
    return(
      <LayoutTodo>
        <HeaderTodo/>
        <InputTodo
          change={this.getNameTodo}
          val={this.state.name}
          type="text"
          name="add"
        />
        <ButtonAddTodo
          click={this.handleAddTodo}
        > Add </ButtonAddTodo>
        <ListTodo
          list={this.state.todo}
          del={this.removeItemTodo}
          finish={this.finishItemTodo}
        />
      </LayoutTodo>
    )
  }
}
export default TodoApp;