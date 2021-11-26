import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState('');

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos)
        console.log(todo, ...todos)
    }

    return (
        <div>
            <h2>What's is the plan</h2>
           <TodoForm onSubmit={addTodo}/> 
        </div>
    )
}

export default TodoList
