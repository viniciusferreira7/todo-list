import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            value: input
        })
    }

    const handleChange = e =>{
        setInput(e.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Add todo"  onChange={handleChange} />
            <button className="todo-input">Add a todo</button>
        </form>
    )
}

export default TodoForm
