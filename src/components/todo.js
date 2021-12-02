import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {AiOutlineEdit} from 'react-icons/ai'

function Todo({todos, receivedTodo, removeTodo, editTodo}){
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })

    const submitTodo = value =>{
        editTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    } 

    if(edit.id){
        return <TodoForm className="todo-form-edit" edit={edit} onSubmit={submitTodo}/>
    }



    return todos.map((todo, index) =>(

        <div className="todo-container">
            <div className={todo.isComplete ? 'todo-row  complete': 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => receivedTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <AiOutlineEdit className="edit-icon" onClick={() => setEdit({id:todo.id, value:todo.text})}/>
                <RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
        </div>
    ))
    
}

export default Todo
