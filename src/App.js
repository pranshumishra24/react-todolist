import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap.min.css';
import { observer } from "mobx-react";

@observer
class App extends Component {

  constructor(props){
    super(props);
    this.state={value:""};
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }


    handleSubmit(event){
      if(this.state.value.trim()==""){
        alert("Task cannot be empty");
        event.preventDefault();
        return;
      }
      this.props.store.createToDo(this.state.value);
      this.setState({value:""});
    }
createTodoList(event){
  if(event.which == 13){
    if(event.target.value.trim()==""){
      alert("Task cannot be empty");
      event.preventDefault();
      return;
    }
    this.props.store.createToDo(event.target.value);
    event.target.value="";
    this.setState({value:""});
  }
}

dele(todo){
  todo.del=true;
  this.props.store.deleteTodo();
}



  render() {
      const { todos }  = this.props.store;
      const todoList = todos.map(todo =>(
        <li key={todo.id} className="mar">
          <div className="row">
            <div className="col-lg-9">
            <ul><li><p>{todo.value}</p></li></ul>
            </div>
            <div><button type="button" className="btn btn-warning" onClick={this.dele.bind(this,todo)} >Delete Task</button></div>
          </div>
        </li>
      ));
    return (
      <div className="container">
        <div className="row mar">
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control col-lg-11" onKeyPress={this.createTodoList.bind(this)} placeholder="Enter your Task" />
        <button type="Submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Save</button>
        </div>
          <ul className="list-unstyled">{todoList}</ul>
      </div>
    );
  }
}

export default App;
