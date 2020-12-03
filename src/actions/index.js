import axios from 'axios';

export const GET_TASKS = 'GET_TASKS';
export const GET_TASK = 'GET_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_PROJECTS = 'GET_PROJECTS';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const ON_LOADING = 'ON_LOADING';

export const onLoading = () => {
    return {
        type: ON_LOADING
    }
}

export const getTasks = () => {
    return function (dispatch) {
        return axios.get('http://localhost:4000/api/tasks')
            .then(result => {
                dispatch({
                    type: GET_TASKS,
                    payload: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const updateTask = (payload) => {
    return function (dispatch) {
        axios.put(`http://localhost:4000/api/tasks/${payload.id}`, {
            name: payload.name,
            projectid: payload.projectid
        }).then(result => {
            dispatch({
                type: UPDATE_TASK,
                payload: result.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getTask = (payload) => {
    return {
        type: GET_TASK,
        payload
    }
}

export const createTask = (payload) => {
    return {
        type: CREATE_TASK,
        payload
    }
}