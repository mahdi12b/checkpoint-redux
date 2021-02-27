import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../../Redux/Action'
import {Form,Button} from 'react-bootstrap'
import'./TodoInput.css'

const TodoInput = () => {
    let [todo,setTodo] = useState('')
     let dispatch = useDispatch()
     const handleAdd = () => {
         if (todo.length>0){
            dispatch(addTask({
                id: Math.random(),
                name:todo,isDone:false
            }));
            setTodo('')
         }
     }
    return (
    <div className='addtask'>
    <Form.Control
     className='Form'
     value={todo} 
     type="text"
     placeholder="Add a task"
     onChange={(e)=>setTodo(e.target.value)}/>
    <Button 
    variant="primary"
    onClick={handleAdd}>Add</Button>
    </div>
    )
}

export default TodoInput
