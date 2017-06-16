import { observable } from 'mobx';

class Todo{

  @observable value;
  @observable id;
  @observable complete;
  @observable del;

  constructor(value){
    this.value = value;
    this.id = Date.now();
    this.completed = false;
    this.del=false;
  }
}

export class Store {
  @observable todos=[];

  createToDo(value){
    this.todos.push(new Todo(value));
  }

  deleteTodo(){
    const remaining = this.todos.filter(todo => !todo.del);
    this.todos.replace(remaining);
  }
}

export default new Store;
