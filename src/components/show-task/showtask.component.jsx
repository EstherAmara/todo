import React from 'react'

const ShowTask = ({todo, deleteTask}) => {
    const task = todo.map(todo => {
        return (
            <div key={todo.id}>
                <div> 
                    {todo.task} 
                    <button onClick={() => {deleteTask(todo.id)}}> Delete Task </button>
                </div>
            </div>
        )
    })

    return (
        <div>
            {task}
        </div>
    )
}

export default ShowTask;