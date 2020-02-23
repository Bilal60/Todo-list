import React from 'react';
import './App.css';
import TasksList from './tasksList';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      tasks: [
        {id: "1", description: "do homework", completed: true},
        {id: "2", description: "go to shopping", completed: false},
        {id: "3", description: "take medication", completed: true}
      ]
    }

  }


  allTasks = () => this.state.tasks

  //methode that filter incompleted tasks
  incompletedTasks = () => this.state.tasks.filter(task => !task.completed);

  //methode that filter completed tasks
  completedTasks = () => this.state.tasks.filter(task => task.completed);

  render(){

    return(
      <div className="App">

        <TasksList tasks={this.allTasks()} title="All tasks" />
        <TasksList tasks={this.completedTasks()} title="Completed tasks" />
        <TasksList tasks={this.incompletedTasks()} title="Incompleted tasks" />

      </div>
    )

  }

}

export default App;


