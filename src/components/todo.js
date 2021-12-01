import React,{useState} from 'react'

function Todo(todos) {
    return todos.map((todo, index) =>(
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} key={index}><div/>
    ))
    
}

export default Todo
