import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text))
            return

            const newTodos =[todo, ...todos]
            setTodos(newTodos)
            console.log(newTodos)
    }

    const editTodo = (todoId, newValue) =>{
        let updateTodo = prev => prev.map(item => item.id === todoId ? newValue : item)

        setTodos(updateTodo)
    }

    const removeTodo = id =>{
        let RemoveArr = [...todos].filter(todo => todo.id !== id)

        setTodos(RemoveArr)
    }

    const completeTodo = id =>{
        let update = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }

        })

        setTodos(update)
    }


    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoList
    