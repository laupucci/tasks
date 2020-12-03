import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Tasks.css';

const Tasks = () => {
    const tasks = useSelector(state => state.tasks)
    return (
        <div className="cards d-flex mt-5 justify-content-between">
            {
                tasks.map(task => (
                    <div className="card mx-auto shadow" key={task.id} style={{ width: "18rem" }}>
                        <div className="card-header">
                            <h1>{task.name.toUpperCase()}</h1>
                        </div>
                        <div className="card-bod">
                            <h3>Projecto {task.projectid}</h3>
                            <p>Status: {task.done.toString()}</p>

                            <Link className="btn btn-primary mb-3" to={`/tasks/${task.id}`}>Revisar</Link>

                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default Tasks;