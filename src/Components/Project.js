import React, { Component } from 'react';
import ProjectItem from './ProjectsItems';

class Project extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
      let projectItems;

      if(this.props.projects){
          projectItems = this.props.projects.map(project => {
              return(
                  <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
              )
          });
      }
    return (
      <ul className="Projects list-group">
        {projectItems}
      </ul>
    );
  }
}

export default Project;
