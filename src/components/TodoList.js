import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text))
            return;

        const newTodos= [todo, ...todos];

        setTodos(newTodos)
        console.log(newTodos)
    }

    const completeTodo = id =>{
        let updateTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
        })
        setTodos(updateTodos)
    }

    return (
        <div>
            <h2>What's the plan today</h2>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo}></Todo>
        </div>
    )
}

export default TodoList
