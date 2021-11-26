import React from 'react'
import './App.css'
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="todo-app">
            <TodoList/>
            <Todo/>
        </div>
    )
}

export default App
