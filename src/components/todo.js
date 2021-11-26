import React, {useState} from 'react'
import TodoList, {todos} from './TodoList'

function Todo() {
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row-complete': 'todo-row'} key={index}>
            <div key={todo.id} onClick={todo.text} ></div>
        </div>
    ))
}

export default Todo
