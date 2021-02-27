import { ADD_TASK,DELETE_TASK,EDIT_TASK,IS_DONE } from "./ActionsType"
import {todos} from './State'


export let taskReducer = (state=todos,action)=>{
    let newTodo
    switch (action.type) {
        case ADD_TASK:
            newTodo=[...state]
            newTodo.push(action.payload)
            return newTodo
        case DELETE_TASK:
             newTodo = [...state]
            newTodo = newTodo.filter(task=> task.id != action.payload)
            return newTodo
            case IS_DONE:
           
               newTodo=[...state]
             newTodo  = newTodo.map((el)=>
               el.id==action.payload?{...el,isDone:!el.isDone}:el)
               return newTodo
           
               case EDIT_TASK:
                newTodo = [...state]
                newTodo = newTodo.map((el)=>
                el.id == action.payload.id ? {...el, name:action.payload.name}:el)
                return newTodo
            
        default :
    }
    return state;
}