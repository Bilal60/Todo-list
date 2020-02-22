import React from 'react';

const Task = props => <li> {props.task.description} <input type="checkbox" defaultChecked = {props.task.completed} /> </li>

export default Task;