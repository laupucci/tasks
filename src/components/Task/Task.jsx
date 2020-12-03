import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTask, updateTask } from '../../actions/';

export default function Task({ id }) {

    const [input, setInput] = useState({})

    const task = useSelector(state => state.task)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTask(id))
    }, [task])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateTask({
            ...input,
            id
        }))
        setInput({});
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="card text-white bg-primary mt-5 p-3 mx-auto" style={{ maxWidth: "20rem" }}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Tarea {task.id}</legend>
                    <h3>{task.name}</h3>
                    <div className="form-group">
                        <label>Name
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Project Name
                        <input type="number" className="form-control" id="projectid" name="projectid" placeholder="Project ID" onChange={handleChange} />
                        </label>
                    </div>
                    {/* <div className="form-group">
                        <label for="exampleSelect1">Example select</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div> */}
                    <button type="submit" className="btn btn-success">Update</button>
                </fieldset>
            </form>
        </div >
    )
}

