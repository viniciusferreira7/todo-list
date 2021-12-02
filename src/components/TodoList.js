import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        
        const newTodos = [todo, ...todos];

        setTodos(newTodos)
    }

    const editTodo = (todoId, newValue) =>{
        if(!newValue ||  /^\s*$/.test(newValue)){
            return
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))

        console.log(newValue)
    }

    const removeTodo = id =>{
        let removeArr = todos.filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const receivedTodo = id =>{
        let update = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo
        }) 

        setTodos(update)
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} receivedTodo={receivedTodo} removeTodo={removeTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoList
