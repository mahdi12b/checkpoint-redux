import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import {useState} from 'react'
import{useSelector}from 'react-redux'
import{Button} from 'react-bootstrap'
import './TodoList.css'

const TodoList = () => {
    const [status, setStatus] = useState("all");
    let todos = useSelector(state => state)
    console.log(todos)
    return (
        <div>
             <div className="btn">
        <Button variant="secondary" onClick={() => setStatus("all")}>
          All tasks
        </Button>
        <Button variant="success" onClick={() => setStatus("done")}>
          Done tasks ✓
        </Button>
        <Button variant="danger" onClick={() => setStatus("undone")}>
          Undone tasks ✗
        </Button>
      </div>
           {
           status=='done'?
           todos
           .filter(todo=>{
              return  todo.isDone==true
           })
           .map(todo=>{
               return  <TodoItem key={todo.id} todo={todo}  />
           })
           :
           status=='undone'?
           todos
           .filter(todo=>{
               return todo.isDone==false
           })
           .map(todo=>{
               return  <TodoItem key={todo.id} todo={todo}  />
           })
           :
           todos.map(todo=>{
            return  <TodoItem key={todo.id} todo={todo}  />

           })
           }
              


        </div>
    )
}

export default TodoList
