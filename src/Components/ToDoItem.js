import React, { Component } from 'react';

class ToDoItem extends Component {

  render() {
    return (
      <li className="ToDO list-group-item">
        {this.props.todo.title}
      </li>
    );
  }
}

export default ToDoItem;
