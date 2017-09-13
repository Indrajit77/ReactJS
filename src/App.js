import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Project from './Components/Project';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './bootstrap.min.css';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getToDos(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({todos: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    }

    getProjects(){
        this.setState({
            projects:[
                {
                    id: uuid.v4(),
                    title: 'Title 1',
                    catagory: 'Cat 1'
                },
                {
                    id: uuid.v4(),
                    title: 'Title 2',
                    catagory: 'Cat 2'
                },
                {
                    id: uuid.v4(),
                    title: 'Title 3',
                    catagory: 'Cat 3'
                }
            ]
        })
    }

    componentWillMount(){
        this.getProjects();
        this.getToDos();
    }

    componentDidMount(){
        this.getToDos();
    }

    handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects});
    }

  render() {
    return (
      <div className="App container">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <h3>Project List</h3>
        <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <h3>To Do List </h3>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
