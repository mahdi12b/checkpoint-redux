import {ADD_TASK,DELETE_TASK,EDIT_TASK,IS_DONE} from './ActionsType'


export const addTask = (payload) => {
    return {
        type:ADD_TASK,
    payload
    }
}
export const deleteTask = (payload) => {
    return {
        type:DELETE_TASK,
        payload
    }
}

export const editTask = (payload) => {
    return {
        type:EDIT_TASK,
        payload 
    }
}
export const doneTask = (payload)=>{
    return {
        type:IS_DONE,
        payload
    }
}