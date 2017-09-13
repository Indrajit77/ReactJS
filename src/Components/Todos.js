import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class Todos extends Component {
  
  render() {
      let toDoItem;

      if(this.props.todos){
          toDoItem = this.props.todos.map(todo => {
              return(
                  <ToDoItem key={todo.title} todo={todo} />
              )
          });
      }
    return (
      <ul className="TodoList list-group">
        {toDoItem}
      </ul>
    );
  }
}

export default Todos;
