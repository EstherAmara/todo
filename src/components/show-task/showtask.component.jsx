import React from 'react';

import './showtask.styles.css';

const ShowTask = ({todo, deleteTask}) => {
    const task = todo
        .filter(todo => {return (!todo.done)})
        .map(todo => {
            return (
                <div key={todo.id}>
                    <ul className="todo"> 
                        <li> {todo.task} </li>
                        <li onClick={() => {deleteTask(todo.id)}}> Done </li>
                    </ul>
                </div>
            )
        })

    return (
        <div className="all">
            {task}
        </div>
    )
}

export default ShowTask;