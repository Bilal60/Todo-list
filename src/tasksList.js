import React from 'react';
import Task from './task.js';

const TasksList = (props) => (

    <div className="taskList">
        <p>{props.title}</p>
        <ul>
        {props.tasks.map( task => 
            <Task key={task.id} task={task} />
        )}
        </ul>
    </div>
    
)

export default TasksList;