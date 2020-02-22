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

    return(
      <div className="App">
        <p>Task list</p>
        <div className="taskList">
          <ul>
            {this.state.tasks.map( task => 
              <Task key={task.id} task={task} />
            )}
          </ul>
        </div>
        <div className="addTask">

        </div>
      </div>
    )

  }

}

export default App;


