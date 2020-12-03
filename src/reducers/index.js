import { GET_TASK, GET_TASKS, UPDATE_TASK } from '../actions/';

const INITIAL_STATE = {
    tasks: [],
    task: {},
    projects: [],
    project: {},
    loading: false
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TASKS:
            return state = {
                ...state,
                tasks: action.payload.tasks
            }
        case GET_TASK:
            return state = {
                ...state,
                task: state.tasks.find(task => task.id === Number(action.payload))
            }
        case UPDATE_TASK:
            console.log(state);
            return state = {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === Number(action.payload.id)) {
                        Object.assign(task, action.payload)
                    }
                })
            };
        default:
            return state;
    }
}

export default rootReducer;


