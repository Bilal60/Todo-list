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
    const incompleteTasks = this.state.tasks.filter(task => task.completed === false)

    console.log(incompleteTasks);

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

        <div className="incompleteTaskList">
          <p>Incomplete task list</p>
          <ul>
            {incompleteTasks.map( task => 
              <Task key={task.id} task={task} />
            )}
          </ul>
        </div>

      </div>
    )

  }

}

export default App;


