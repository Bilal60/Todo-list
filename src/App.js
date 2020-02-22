import React from 'react';
import './App.css';
import Task from './task.js';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      tasks: [
        {id: "1", description: "do homework", completed: true},
        {id: "2", description: "go to shop", completed: false},
        {id: "3", description: "take medication", completed: true}
      ]
    }

  }

  render(){

    //filter all incomplete tasks
    const incompletedTasks = this.state.tasks.filter(task => !task.completed);
    const completedTasks = this.state.tasks.filter(task => task.completed);

    return(
      <div className="App">

        <div className="taskList">
          <p>Task list</p>
          <ul>
            {this.state.tasks.map( task => 
              <Task key={task.id} task={task} />
            )}
          </ul>
        </div>

        <div className="incompletedTasks">
          <p>Incompleted tasks</p>
          <ul>
            {incompletedTasks.map( task => 
              <Task key={task.id} task={task} />
            )}
          </ul>
        </div>

        <div className="completedTasks">
          <p>Completed tasks</p>
          <ul>
            {completedTasks.map( task => 
              <Task key={task.id} task={task} />
            )}
          </ul>
        </div>

      </div>
    )

  }

}

export default App;


