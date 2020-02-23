import React from 'react';
import './App.css';
import TasksList from './tasksList';

const ROUTES = {
  home: '#/',
  completedTasks: '#/completed-tasks',
  incompletedTasks: '#/incompleted-tasks'
};

class App extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      currentRoute: ROUTES.home,
      tasks: [
        {id: "1", description: "do homework", completed: true},
        {id: "2", description: "go to shopping", completed: false},
        {id: "3", description: "take medication", completed: true}
      ]
    }

  }

  componentDidMount(){
    window.onhashchange = (e) =>{
      this.setState({currentRoute: window.location.hash})
    }
  }


  allTasks = () => this.state.tasks

  //methode that filter incompleted tasks
  incompletedTasks = () => this.state.tasks.filter(task => !task.completed);

  //methode that filter completed tasks
  completedTasks = () => this.state.tasks.filter(task => task.completed);

  //methode that route
  todolistRouter = () =>{
    switch(this.state.currentRoute){
      case ROUTES.home: return <TasksList tasks={this.allTasks()} title="All tasks" />
      case ROUTES.incompletedTasks: return <TasksList tasks={this.incompletedTasks()} title="Incompleted tasks" />
      case ROUTES.completedTasks: return <TasksList tasks={this.completedTasks()} title="Completed tasks" />
      default: return "Page not found";
    }
  }

  render(){

    return(
      <div className="App">

        <div>
          <button><a href={ROUTES.home}>All tasks</a></button>
          <button><a href={ROUTES.incompletedTasks}>Incompleted tasks</a></button>
          <button><a href={ROUTES.completedTasks}>Completed tasks</a></button>
        </div>
        {this.todolistRouter()}

      </div>
    )

  }

}

export default App;


