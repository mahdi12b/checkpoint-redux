import React from 'react'
import './TodoItem.css'
import {Button,Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {deleteTask,doneTask} from '../../Redux/Action'
import Edit from '../Edit/Edit'
 

const TodoItem = ({todo}) => {
 let done = []
 let dispatch = useDispatch();
 const state = useSelector((state) => state)
  todo.isDone ? done.push('done') : done.push('undone')

    return (
        
        <div className='TodoItem m-3'>
           <p className={done}>{todo.name}</p>
           <Edit todo={todo}/>
           <Button
           className='m-2'
           variant="danger"
           onClick={()=>dispatch(deleteTask(todo.id))}>Delete</Button>
           <Button 
          onClick={()=>dispatch(doneTask(todo.id))}>{todo.isDone? ' done ' : 'undone'}</Button>
           
            
        </div>
    )
}

export default TodoItem
