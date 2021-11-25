import React ,{useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodo] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
    

        const newTodos = [todo, ...todos]

        setTodo(newTodos);
        console.log(newTodos[1])
        console.log(newTodos[0])

    }

    return (
        <div>
            <h2>What's is the plan</h2>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}


export default TodoList
