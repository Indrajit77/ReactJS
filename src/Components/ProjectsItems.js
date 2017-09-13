import React, { Component } from 'react';

class ProjectItem extends Component {

	deleteProject(id){
		this.props.onDelete(id);
	}

  render() {
    return (
      <li className="Projects list-group-item">
        <strong>{this.props.project.title}</strong> - <em>{this.props.project.catagory}</em> <button className="btn btn-danger" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
      </li>
    );
  }
}

export default ProjectItem;
