import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

    constructor(){
      super();

      this.state = {
        newProject: {}
      }

    }

    static defaultProps = {
        catagories: ['Cat-1', 'Cat-2', 'Cat-3']
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value === ''){
            alert('Title is empty');
        }else{
            this.setState({newProject:{
              id: uuid.v4(),
              title: this.refs.title.value,
              catagory: this.refs.category.value
            }}, function(){
              this.props.addProject(this.state.newProject);
            });
        };
    }



  render() {
      let catagoryOpt = this.props.catagories.map(catagory => {
         return <option key={catagory} value={catagory}>{catagory}</option>
      });

    return (
        <div>
      <h3>
        Add Projects
      </h3>

      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
            <label>Title</label><br />
            <input type="text" ref="title" className="form-control"/>
        </div>
        <div>
            <label>Catagory</label><br />
            <select ref="category" className="form-control">
                {catagoryOpt}
            </select>
        </div>
        <br />
        <input type="submit" value="Submit" className="btn btn-primary"></input>
      </form>
      </div>
    );
  }
}

export default AddProject;
